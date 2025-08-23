// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'static' // tells Nuxt to generate static HTML files
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Travel Blog',
      meta: [
        { name: 'description', content: 'Travel blog from Andreas Gerasimow.' }
      ],
    },
    pageTransition: {
      name: 'fade',
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt', '@nuxtjs/leaflet']
})