const site = {
    url: 'https://blog.gerasimow.de',
    name: 'Travel blog from Andreas Gerasimow.'
}


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'static' // tells Nuxt to generate static HTML files
  },

  site,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Travel Blog',
      meta: [
        { property: "og:title", content: site.name },
        { property: "og:url", content: site.url },
        {
            name: 'description',
            content: 'Hi there 👋. I’m Andreas, and this is my travel blog where I share my experiences from all my trips around the world.'
        },
        { property: 'og:image', content: site.url + '/images/travel_blog_thumb.jpeg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '480' },
        { property: 'og:image:height', content: '640' },
      ],
      script: [
        {
          src: "//gc.zgo.at/count.js",
          async: true,
          'data-goatcounter': "https://agerasimow.goatcounter.com/count"
        }
      ]
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

  modules: ['@pinia/nuxt', '@nuxtjs/leaflet', '@nuxtjs/sitemap']
})