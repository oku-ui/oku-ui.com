import { fileURLToPath } from 'url'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'pathe'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)
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
    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      tailwindConfig.plugins = tailwindConfig.plugins || []
      tailwindConfig.plugins.push(iconsPlugin({ collections: getIconCollections(options.icons as any[]) }))
    })

  }
})