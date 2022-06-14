<template>
  <section id="helloWorld">
    <h1>{{ title }}</h1>

    <form @submit.prevent="submit">
      <div>
        <label>Name</label>
        <input v-model.trim="$v.name.$model" />

        <span v-if="$v.name.$error && !$v.name.minLength"> Min Length </span>
        <span v-if="$v.name.$error && !$v.name.required">
          Field is required
        </span>
      </div>

      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script src="./helloWorld.page"></script>
<style src="./helloWorld.page.scss" lang="scss" scoped></style>
