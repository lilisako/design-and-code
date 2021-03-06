export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'design-and-code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Neonderthaw: true,
      'EB Garamond': true,
      'Fredoka One': true,
      VT323: true,
      'Inria Sans': true,
      Kanit: true,
      'Do Hyeon': true,
      'DM Sans': true,
      'Plus Jakarta Sans': true,
      'Red Hat Display': true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  devServerHandlers: []
}
