export default {
  rootDir: 'src/',
  head: {
    title: 'Wellcome',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap',
      },
    ],
  },
  components: true,
  devServerHandlers: [],
  axios: { baseURL: '/' },
  modules: ['@nuxtjs/axios', '@nuxtjs/tailwindcss'],
  css: [
    '@/assets/styles/scss/global.scss',
    'animate.css/animate.min.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  router: {
    middleware: ['router-middleware'],
  },
  plugins: [
    { src: '@/directives', ssr: false },
    { src: '@/plugins/vuex-persist', ssr: false },
    { src: '@/plugins/global-mixin', mode: 'all' },
  ],
  styleResources: { scss: ['@/assets/styles/scss/global.scss'] },
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
}
