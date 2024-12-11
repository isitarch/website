// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-gray-900 text-gray-200'
      }
    }
  },
  routeRules: {
      '/': { redirect: '/de' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'de',
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json'
    },
    {
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.json'
    }
    ],
    langDir: '../locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'de'
    }
  },
  compatibilityDate: '2024-11-27'
})