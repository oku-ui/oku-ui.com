// Autodoc from inkline.io
// reference: https://github.com/inkline/inkline.io/blob/main/server/plugins/content.ts
import { accessSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const autodocsRegEx = /code-group\s*\{(.+})/g
const paramsRegEx = /(\w+)="([^"]+)"/g

function isFileExits(path: string) {
  try {
    accessSync(path)
    return true
  }
  catch (e: any) {
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
          ['index.vue', 'tailwind.config.js'].forEach((f) => {
            // eslint-disable-next-line n/prefer-global/process
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
          else console.error(`Could not find code in ${params.file}`)
        }
      } while (match)

      file.body = body
    }
  })
})
