export default {
  bind(el, animation) {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not found in Browser')
      return
    }

    const animatedScrollObserver = new IntersectionObserver(
      (entries, animatedScrollObserver) => {
        const animationName = animation.value
          ? `animate__${animation.value}`
          : 'animate__fadeIn'

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated')
            entry.target.classList.add(animationName)

            animatedScrollObserver.unobserve(entry.target)
          }
        })
      }
    )

    animatedScrollObserver.observe(el)
  },
}
