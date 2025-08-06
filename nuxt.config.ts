export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/fonts', // Módulo correto
  ],

  css: ['~/assets/css/global.css'],
});
