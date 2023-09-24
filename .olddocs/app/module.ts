import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

import colors from 'tailwindcss/colors.js'

const themeDir = fileURLToPath(new URL('./', import.meta.url))

// @ts-expect-error
delete colors.lightBlue
// @ts-expect-error
delete colors.warmGray
// @ts-expect-error
delete colors.trueGray
// @ts-expect-error
delete colors.coolGray
// @ts-expect-error
delete colors.blueGray

export interface ModuleOptions {

  icons: string[] | string

  safelistColors?: string[]
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'oku',
    version: '3.0.0',
    compatibility: {
      nuxt: '^3.0.0-rc.14',
      bridge: false,
    },
    defaults: {
      icons: ['heroicons'],
    },
  },
  setup(options, nuxt) {

  },
})
