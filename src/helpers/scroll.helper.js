export function scrollTo(id) {
  const element = document.getElementById(id)
  if (!element) return

  const to = element.offsetTop - Number(100)

  window.scroll(0, to)
}
