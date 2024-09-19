// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxt/icon'
	],
	tailwindcss: {
		cssPath: ['/main.css', { injectPosition: 'first' }],
		configPath: 'tailwind.config.js',
		exposeConfig: {
			level: 2,
		},
		viewer: true,
	}
})
