<template>
  <div class="home">
    <h3>My Counter: {{ counterTitle }}</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterTitle" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const counterTitle = ref('')

const decreaseCounter = () => counter.value--

const increaseCounter = () => counter.value++
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn {
  cursor: pointer;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
