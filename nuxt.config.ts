// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@ant-design-vue/nuxt'
  ],

  compatibilityDate: '2024-10-18',
  future: { compatibilityVersion: 4 },

  nitro: {
    rollupConfig: {
      external: ["cloudflare:sockets"],
    },
  },

  runtimeConfig: {
    env: {
      DATABASE_URL: process.env.DATABASE_URL
    },
  }
})