// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Лапа Помощи'
    }
  },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  pinia: {
    storesDirs: ['~/stores/**', '~/custom-folder/stores/**'],
  },
  css: [`~/assets/css/main.css`],
})