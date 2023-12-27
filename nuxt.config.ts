


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
	'nuxt-gtag'
    

  ],


  app: {
		head: {

			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1',
			title: 'TELOS truck - the future of adventure transport',
			meta: [
			// <meta name="description" content="My amazing site">
			{ name: 'description', content: 'TELOS - the future of compact trucks' }
			 ],
			 htmlAttrs: {
				lang: 'en',
			  },
		}
	},

  telemetry: false,

  nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true,
		}
	},

	gtag: {
		id: 'G-BWCRRPEGZ2'
	  }




})
