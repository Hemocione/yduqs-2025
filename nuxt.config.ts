export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/": { prerender: true },
  },

  modules: ["@nuxt/image", "@nuxt/fonts"],

  css: ["~/assets/css/global.css", "~/assets/css/transitions.css"],

  runtimeConfig: {
    public: {
      copaHemocione: "https://copa.hemocione.com.br/",
      possoDoar: "https://possodoar.hemocione.com.br/",
      subscriptionBase: "https://eventos.hemocione.com.br/",
    },
  },

  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
});
