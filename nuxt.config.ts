export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/": { prerender: true },
  },

  modules: ["@nuxt/image", "@nuxt/fonts"],

  css: ["~/assets/css/global.css", "~/assets/css/transitions.css"],

  runtimeConfig: {
    public: {
      copaHemocioneBase: "https://copa.hemocione.com.br/competition/",
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
