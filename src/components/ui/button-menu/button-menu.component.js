export default {
  name: 'ButtonMenuComponent',
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
