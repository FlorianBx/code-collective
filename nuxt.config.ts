export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-lucide-icons",
    // "nuxt-nodemailer"
    "nuxt-mail",
    "@nuxt/image",
  ],
	routeRules: {
	'/': { prerender: true },
		'/blog': { isr: 3600 },
},
  runtimeConfig: {
    mail: {
      message: {
        to: process.env.NUXT_MAIL_TO,
      },
      smtp: {
        host: process.env.NUXT_MAIL_HOST,
        port: process.env.NUXT_MAIL_PORT,
        auth: {
          user: process.env.NUXT_MAIL_USER,
          pass: process.env.NUXT_MAIL_PASS,
        },
      },
    },
  },
  // tailwindcss: {
  //   cssPath: "main.css",
  //   configPath: "tailwind.config.js",
  //   exposeConfig: true,
  //   viewer: true,
  // },
});

