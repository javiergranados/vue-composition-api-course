<template>
  <div class="modal" v-if="showModal">
    <slot name="title">Modal Title</slot>
    <slot/>
    <button @click="$emit('closeModal')">Close</button>
  </div>
</template>

<script setup>
defineProps({
  showModal: Boolean
})
</script>

<style scoped>
.modal {
  background-color: beige;
  padding: 10px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
}
.modal h1,
.modal p {
  text-align: left;
}
.modal button {
  margin-top: 80px;
}
</style>
