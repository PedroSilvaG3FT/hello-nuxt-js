module.exports = {
  content: [
    './src/components/**/*.{vue,scss}',
    './src/layouts/**/*.{vue,scss}',
    './src/pages/**/*.{vue,scss}',
    './nuxt.config.js',
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.875rem',
      xl: '2.25rem',
    },
    screens: {
      xs: { max: '475px' },
      sm: { max: '640px' },
      md: { max: '890px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      full: '100%',
      '50%': '50%',
      16: '4rem',
    },
  },
  plugins: [],
}
