<script setup lang="ts">
import Navbar from '@ui/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>
