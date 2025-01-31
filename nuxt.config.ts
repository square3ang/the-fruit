import { defineNuxtConfig } from 'nuxt/config';
import vitePluginString from 'vite-plugin-string'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: "~/skins",
    }
  ],
  plugins: [
    '~/plugins/storeSupport.js',
    '~/plugins/compat-v2.js',
    '~/plugins/vue-final-modal.js',
  ],
  vite: {
    plugins: [
      vitePluginString(),
      {
        name: 'vite-raw-loader',
        enforce: 'pre',
        transform(code, id) {
          if (/LICENSE$/.test(id)) {
            return `export default ${JSON.stringify(code)};`;
          }
        }
      }
    ]
  },
  routeRules: {
    "/": {
      redirect: "/w/%EC%A0%95%EC%82%AC%EA%B0%81%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8",
    },
  }
})
