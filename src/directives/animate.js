export default {
  bind(el, animation) {
    el.classList.add(`animate__animated`)
    el.classList.add(`animate__${animation.value}`)
  },
}
