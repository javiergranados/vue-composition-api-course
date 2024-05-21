<script setup>
import { onMounted, ref } from 'vue'
import { vAutofocus } from '../directives'

const titleRef = ref(null)

onMounted(() => {
  titleRef.value.classList.add('title')
})
</script>

<template>
  <div class="about">
    <h1 ref="titleRef">About</h1>
    <textarea v-autofocus></textarea>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
}
.title {
  color: hsla(160, 100%, 37%, 1);
}
textarea {
  height: 80px;
  margin-bottom: 73px;
}
</style>
