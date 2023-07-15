import contributorNames from '../server/data/contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

interface TeamMember extends Contributor {
  title: string
  desc: string
  org?: string
  orgLink?: string
  sponsor?: string
  links?: {
    icon: string
    link: string
  }[]
}

export interface CoreTeam extends TeamMember {
  // required to download avatars from GitHub
  github: string
  twitter?: string
  mastodon?: string
  discord?: string
  youtube?: string
}

const contributorsAvatars: Record<string, string> = {}

function getAvatarUrl(name: string) {
  return import.meta.hot ? `https://github.com/${name}.png` : `/user-avatars/${name}.png`
}

const contributors = (contributorNames as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])
function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.mastodon)
    tm.links.push({ icon: 'mastodon', link: tm.mastodon })

  if (tm.discord)
    tm.links.push({ icon: 'discord', link: tm.discord })

  if (tm.youtube)
    tm.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${tm.youtube}` })

  if (tm.twitter)
    tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` })

  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.productdevbook,
    name: 'Mehmet',
    github: 'productdevbook',
    twitter: 'productdevbook',
    discord: 'https://chat.productdevbook.com',
    youtube: 'productdevbook',
    sponsor: 'https://github.com/sponsors/productdevbook',
    title: 'A collaborative being, working',
    org: 'productdevbook',
    orgLink: 'https://productdevbook.com',
    desc: 'Core team member of productdevbook & oku',
  },
  {
    avatar: contributorsAvatars['sheremet-va'],
    name: 'Vladimir',
    github: 'sheremet-va',
    mastodon: 'https://elk.zone/m.webtoo.ls/@sheremet_va',
    twitter: 'sheremet_va',
    sponsor: 'https://github.com/sponsors/sheremet-va',
    title: 'An open source fullstack developer',
    desc: 'Core team member of Vitest',
  },
  {
    avatar: contributorsAvatars['patak-dev'],
    name: 'Patak',
    github: 'patak-dev',
    mastodon: 'https://elk.zone/m.webtoo.ls/@patak',
    twitter: 'patak_dev',
    sponsor: 'https://github.com/sponsors/patak-dev',
    title: 'A collaborative being, working',
    org: 'StackBlitz',
    orgLink: 'https://stackblitz.com/',
    desc: 'Core team member of Vite & Vue',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export function useContributors() {
  return {
    contributors,
    teamMembers,
  }
}
