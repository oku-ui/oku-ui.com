// Souce: https://github.com/vitest-dev/vitest/tree/main/docs/.vitepress/scripts

import { promises as fs } from 'node:fs'
import { $fetch } from 'ofetch'

interface Contributor {
  login: string
}

async function fetchContributors(page = 1) {
  const collaborators: string[] = []
  const data = await $fetch<Contributor[]>(`https://api.github.com/repos/oku-ui/primitives/contributors?per_page=100&page=${page}`, {
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  }) || []
  collaborators.push(...data.map(i => i.login))
  if (data.length === 100)
    collaborators.push(...(await fetchContributors(page + 1)))
  return collaborators.filter(name => !name.includes('[bot]'))
}

async function generate() {
  const collaborators = await fetchContributors()
  await fs.writeFile('./server/data/contributor-names.json', `${JSON.stringify(collaborators, null, 2)}\n`, 'utf8')
}

generate()
