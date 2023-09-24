// Souce: https://github.com/vitest-dev/vitest/tree/main/docs/.vitepress/scripts

import { fileURLToPath } from 'node:url'
import { Buffer } from 'node:buffer'
import { dirname, join, resolve } from 'pathe'
import fs from 'fs-extra'
import { $fetch } from 'ofetch'

const docsDir = resolve(dirname(fileURLToPath(import.meta.url)), '../')
const pathContributors = resolve(docsDir, 'server/data/contributor-names.json')
const dirAvatars = resolve(docsDir, 'public/user-avatars/')
const dirSponsors = resolve(docsDir, 'public/sponsors/')

let contributors: string[] = []

async function download(url: string, fileName: string) {
  if (fs.existsSync(fileName))
    return
  // eslint-disable-next-line no-console
  console.log('downloading', fileName)
  try {
    const image = await $fetch(url, { responseType: 'arrayBuffer' })
    await fs.writeFile(fileName, Buffer.from(image))
  }
  catch { }
}

async function fetchAvatars() {
  await fs.ensureDir(dirAvatars)
  contributors = JSON.parse(await fs.readFile(pathContributors, { encoding: 'utf-8' }))

  await Promise.all(contributors.map(name => download(`https://github.com/${name}.png?size=100`, join(dirAvatars, `${name}.png`))))
}

async function fetchSponsors() {
  await fs.ensureDir(dirSponsors)
  await download('https://cdn.jsdelivr.net/gh/productdevbook/static/sponsors.svg', join(dirSponsors, 'productdevbook.svg'))
}

fetchAvatars()
fetchSponsors()
