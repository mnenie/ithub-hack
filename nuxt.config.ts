export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})
