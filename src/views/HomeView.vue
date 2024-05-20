<script setup>
import { reactive } from 'vue'
import { vAutofocus } from '../directives'

const counterData = reactive({
  count: 0,
  title: 'Example'
})

const decreaseCounter = () => counterData.count--

const increaseCounter = () => counterData.count++
</script>

<template>
  <div class="home">
    <h3>My Counter: {{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus />
    </div>
  </div>
</template>

<style scoped>
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
