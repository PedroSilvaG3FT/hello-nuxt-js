export default {
  name: 'SideMenuComponent',
  props: ['items', 'isOpen'],
  watch: {
    isOpen(value) {
      document.body.style.overflow = value ? 'hidden' : 'auto'
    },
  },
  mounted() {
    window.addEventListener('resize', () => this.$emit('onClose'))
  },
  methods: {
    async handleClose() {
      await this.animationClose()

      this.$emit('onClose')
    },
    async handleSelect(item) {
      await this.animationClose()

      this.$emit('onSelect', item)
    },
    animationClose() {
      const sideMenuEl = document.getElementById('sideMenu')
      sideMenuEl.classList.add('animate__fadeOutRight')

      return new Promise((resolve) => setTimeout(() => resolve({}), 700))
    },
  },
}
