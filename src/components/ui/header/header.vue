<template>
  <header id="header" :class="{ 'header-color': isHeaderColor }">
    <nav>
      <img
        v-animate="'fadeInLeft'"
        src="@/assets/images/logo.png"
        alt="Logo"
        @click="goTo(imageRedirect)"
      />

      <article v-animate="'fadeInDown'">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: item.active }"
          @click="goTo(item.id)"
        >
          {{ item.name }}
        </a>
      </article>

      <ButtonMenu @click="openSideMenu"></ButtonMenu>
    </nav>
    <SideMenu
      :items="menuItems"
      :is-open="showSideMenu"
      @onClose="closeSideMenu"
      @onSelect="onSelectItem"
    ></SideMenu>
  </header>
</template>

<script src="./header.component.js"></script>
<style src="./header.component.scss" lang="scss" scoped></style>
