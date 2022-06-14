<template>
  <DefaultLayout></DefaultLayout>
</template>

<script>
export default {
  components: {
    DefaultLayout: () => import('@/components/ui/layouts/default/default.vue'),
  },
}
</script>
