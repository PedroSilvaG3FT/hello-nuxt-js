export default {
  rootDir: 'src/',
  head: {
    title: 'hello-ui',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  axios: { baseURL: '/' },
  modules: ['@nuxtjs/axios'],
  css: ['@/assets/styles/scss/global.scss'],
  plugins: [
    { src: '@/plugins/vuex-persist', ssr: false },
    { src: '@/plugins/global-mixin', mode: 'both' }
  ],
  styleResources: { scss: ['@/assets/styles/scss/global.scss'] },
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
