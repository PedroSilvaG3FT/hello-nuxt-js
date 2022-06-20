<template>
  <section id="landingPage">
    <Banner></Banner>
  </section>
</template>

<script>
export default {
  components: {
    Banner: () => import('@/components/landing-page/banner'),
  },
}
</script>
