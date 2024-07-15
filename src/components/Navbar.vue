<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const showMobileNav = ref(false)
const navbarBurgerRef = ref(null)
const navbarMenuRef = ref(null)

onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false
  },
  { ignore: [navbarBurgerRef] }
)
</script>

<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item has-text-white is-size-4 is-family-monospace">
          Noteballs
        </div>
        <a
          ref="navbarBurgerRef"
          class="navbar-burger has-text-white"
          :class="{ 'is-active': showMobileNav }"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        ref="navbarMenuRef"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item has-text-white"
            active-class="is-active"
            @click="showMobileNav = false"
            >Notes</RouterLink
          >
          <RouterLink
            to="/stats"
            class="navbar-item has-text-white"
            active-class="is-active"
            @click="showMobileNav = false"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
