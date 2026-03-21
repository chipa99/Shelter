// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Лапа Помощи'
    }
  },

  nitro: {
    routeRules: {
      '/': { prerender: true },
      '/pets': { ssr: true, swr: 300 },
      '/pets/pet/**': { prerender: true, swr: 3600 },
      '/profile/**': { ssr: true, headers: { 'cache-control': 'private, no-store, no-cache, must-revalidate' } },
      '/login': { ssr: false },
    }
  },

  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  pinia: {
    storesDirs: ['~/stores/**', '~/custom-folder/stores/**'],
  },
  css: [`~/assets/css/main.css`],
})