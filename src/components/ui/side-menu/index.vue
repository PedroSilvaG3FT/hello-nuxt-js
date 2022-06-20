<template>
  <section v-if="isOpen" id="sideMenu" v-animate="'fadeInRight'">
    <nav>
      <img v-animate="'fadeInDown'" src="@/assets/images/logo.png" alt="Logo" />
      <button @click="handleClose">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </nav>

    <article>
      <span
        v-for="(item, index) in items"
        :key="index"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </span>
    </article>
  </section>
</template>

<script src="./side-menu.component.js"></script>
<style src="./side-menu.component.scss" lang="scss" scoped></style>
