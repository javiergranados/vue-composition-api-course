<template>
  <div class="home">
    <div class="network">
      Network Status:
      <span style="color: green" v-if="isOnline">Online</span>
      <span v-else style="color: red">Offline</span>
    </div>
    <h3>My Counter: {{ counterData.title }}</h3>
    <div>
      <button :disabled="isButtonDisabled" @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button :disabled="isButtonDisabled" @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from '../directives'
import { useCounter } from '../composables'
import { useOnline } from '@vueuse/core'

const isOnline = useOnline()

const { counterData, isButtonDisabled, decreaseCounter, increaseCounter } = useCounter()
</script>

<style scoped>
.network {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: beige;
  border-radius: 5px;
}
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
button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
