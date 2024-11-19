import { promises as fs } from 'node:fs'

interface Contributor {
  login: string
}

async function fetchContributors(page = 1) {
  const collaborators: string[] = []

  const motionres = await fetch(`https://api.github.com/repos/oku-ui/motion/contributors?per_page=100&page=${page}`, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!motionres.ok) {
    console.error(`Failed to fetch contributors page #${page}: ${motionres.status} ${motionres.statusText} ${await motionres.text()}`)
    return []
  }

  const motionData: Contributor[] = await motionres.json()

  const primitivesres = await fetch(`https://api.github.com/repos/oku-ui/primitives/contributors?per_page=100&page=${page}`, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!primitivesres.ok) {
    console.error(`Failed to fetch contributors page #${page}: ${primitivesres.status} ${primitivesres.statusText} ${await primitivesres.text()}`)
    return []
  }

  const primitivesData: Contributor[] = await primitivesres.json()

  const pergelres = await fetch(`https://api.github.com/repos/oku-ui/pergel/contributors?per_page=100&page=${page}`, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })

  if (!pergelres.ok) {
    console.error(`Failed to fetch contributors page #${page}: ${pergelres.status} ${pergelres.statusText} ${await pergelres.text()}`)
    return []
  }

  const pergelData: Contributor[] = await pergelres.json()

  const data = [...motionData, ...primitivesData, ...pergelData]

  collaborators.push(...data.map(contributor => contributor.login))
  if (motionres.headers.get('Link')?.includes('rel=\"next\"'))
    collaborators.push(...(await fetchContributors(page + 1)))
  if (primitivesres.headers.get('Link')?.includes('rel=\"next\"'))
    collaborators.push(...(await fetchContributors(page + 1)))
  if (pergelres.headers.get('Link')?.includes('rel=\"next\"'))
    collaborators.push(...(await fetchContributors(page + 1)))

  // return collaborators.filter(name => !name.includes('[bot]')) eger ayni ad varsa sil.
  return collaborators.filter((name, index, self) => self.indexOf(name) === index).filter(name => !name.includes('[bot]'))
}

async function generate() {
  const collaborators = await fetchContributors()
  await fs.writeFile('.vitepress/contributor-names.json', `${JSON.stringify(collaborators, null, 2)}\n`, 'utf8')
}

generate()
