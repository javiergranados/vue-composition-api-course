<script setup>
import { vAutofocus } from '../directives'
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <textarea v-autofocus></textarea>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}
textarea {
  height: 80px;
  margin-bottom: 73px;
}
</style>
