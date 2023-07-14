import { fileURLToPath } from 'url'
import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'pathe'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const themeDir = fileURLToPath(new URL('./', import.meta.url))

import colors from 'tailwindcss/colors.js'

// @ts-ignore
delete colors.lightBlue
// @ts-ignore
delete colors.warmGray
// @ts-ignore
delete colors.trueGray
// @ts-ignore
delete colors.coolGray
// @ts-ignore
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
      bridge: false
    },
    defaults: {
      icons: ['heroicons'],
    },
  },
  setup(options, nuxt) {
    

  }
})