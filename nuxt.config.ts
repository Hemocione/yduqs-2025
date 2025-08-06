export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/fonts', 
  ],

  css: ['~/assets/css/global.css'],

  runtimeConfig: {
    public: {
      copaHemocione: 'https://copa.hemocione.com.br/',
      possoDoar: 'https://possodoar.hemocione.com.br/',
      subscription: 'https://eventos.hemocione.com.br/'
    },
  },
});
