export default defineAppConfig({
  docus: {
    title: 'Oku',
    description: 'The best place to start your documentation.',
    image: '/og-image.png',
    socials: {
      github: 'oku-ui',
      twitter: 'oku_ui',
      discord: {
        label: 'Discord',
        icon: 'simple-icons:discord',
        href: 'https://chat.productdevbook.com',
      },
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'docs',
      owner: 'oku-ui',
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
})
