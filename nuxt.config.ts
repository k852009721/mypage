// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@unocss/nuxt','@vueuse/nuxt'],
	css: ['@unocss/reset/tailwind.css'],
	nitro: {
		preset: 'netlify'
	}
})
