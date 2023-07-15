// Autodoc from inkline.io
// reference: https://github.com/inkline/inkline.io/blob/main/server/plugins/content.ts
import { accessSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { resolve } from 'pathe'
import glob from 'fast-glob'

const rootPath = resolve('.')
const codeCache = new Map<string, string>()
const codeFilePaths = [...glob.sync(resolve('**', 'Demo.vue'))]

codeFilePaths.forEach((filePath) => {
  const keyName = filePath.split(rootPath)[1].slice(1)
  codeCache.set(keyName, readFileSync(filePath, 'utf-8'))
})

const autodocsRegEx = /code-group\s*\{(.+})/g
const paramsRegEx = /(\w+)="([^"]+)"/g

function isFileExits(path: string) {
  try {
    accessSync(path)
    return true
  }
  catch (e) {
    return false
  }
}

export default defineNitroPlugin((nitroApp) => {
  // @ts-expect-error
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      let match
      let body = file.body

      do {
        match = autodocsRegEx.exec(body)

        if (match) {
          const rawParams = match[1]
          const params = [...rawParams.matchAll(paramsRegEx)].reduce<
            Record<string, string>
          >((acc, [, propertyName, propertyValue]) => {
            acc[propertyName] = propertyValue

            return acc
          }, {})

          let codeBlock = '';
          ['index.vue', 'styles.css', 'tailwind.config.js'].forEach((f) => {
            const filePath = `${process.cwd()}/components/${params.file}/${f}`

            if (isFileExits(filePath)) {
              const extension = f.split('.').pop()
              const syntax = extension
              const source = readFileSync(join(filePath), 'utf8')

              codeBlock = codeBlock.concat(`~~~${syntax}[${f}]\n${source}\n~~~\n`)
            }
          })

          if (codeBlock.length)
            body = body.replace(match[0], `${match[0]}\n${codeBlock}\n`)
          else console.error(`Could not find codes in ${params.file}`)
        }
      } while (match)

      file.body = body
    }
  })
})
