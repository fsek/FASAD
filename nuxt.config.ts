import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  css: [
  ],
  meta: {
    meta: [
      { charset: 'utf-8' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900'
      }
    ]
  },
  modules: [
    '@nuxtjs/dayjs'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:6969'
    }
  }
  // proxying currently dosent work in nuxt 3 (on server-side rendering, with vite-proxy it works on web browser)
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': { target: 'http://localhost:6969', rewrite: path => path.replace(/^\/api/, ''), changeOrigin: true }
  //     }
  //   }
  // }
})
