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
    title: 'An open source fullstack developer',
    org: 'productdevbook',
    orgLink: 'https://productdevbook.com',
    desc: 'Core team member of productdevbook & oku',
  },
  {
    avatar: contributorsAvatars.dammy001,
    name: 'Anjorin Damilare',
    github: 'dammy001',
    twitter: 'laravel00',
    title: 'Software Engineer',
    desc: 'Core team member of Oku',
  },
  {
    avatar: contributorsAvatars.YeSuX,
    name: 'Suxiong',
    github: 'YeSuX',
    twitter: 'YeSuX1998',
    title: 'A front-end Developer',
    desc: 'Core team member of Oku',
  },
  {
    avatar: contributorsAvatars.emirulucay,
    name: 'Emir Uluçay',
    github: 'emirulucay',
    twitter: 'astrodokki',
    title: 'A designer and developer',
    desc: 'Core team member of Oku',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export function useContributors() {
  return {
    contributors,
    teamMembers,
  }
}
