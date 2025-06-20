// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-05-15',
//   devtools: { enabled: true }
// })
// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


// export default defineNuxtConfig({

//   //...
 
//   build: {
//     transpile: ['vuetify'],
//   },
//   modules: [
//     (_options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', (config) => {
//         // @ts-expect-error
//         config.plugins.push(vuetify({ autoImport: true }))
//       })
//     },
//     '@nuxtjs/seo'
//     //...
//   ],
//   site: { 
//     url: process.env.NUXT_SITE_URL, 
//     name: process.env.NUXT_SITE_NAME 
//   }, 
 
//   vite: {
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },
// })
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/seo'
  ],

  // SEO Module Configuration (2024 format)
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL || 'https://rmlbrcs.vercel.app'
    }
  },

  // Sitemap configuration
  sitemap: {
    // No need for siteUrl here - it's automatically taken from runtimeConfig
    // Add other sitemap options if needed
  },

  // Schema.org configuration
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Ramil Bercasio',
      url: process.env.NUXT_SITE_URL || 'https://rmlbrcs.vercel.app'
    }
  },

  // App configuration
  app: {
    head: {
      title: process.env.NUXT_SITE_NAME || 'Nuxt 3 Developer Portfolio | Ramil Bercasio',
      meta: [
        { name: 'description', content: 'Professional portfolio showcasing Nuxt 3 projects' }
      ]
    }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})