<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <div class="modalView">
    <h1>Modal</h1>
    <button class="openButton" @click="showModal = true">Open Modal</button>
    <Teleport to="body">
      <div class="modal" v-if="showModal">
        <h1>Modal Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates beatae eveniet
          doloremque placeat sint corrupti a, adipisci cupiditate praesentium. Animi aliquid illum
          adipisci dolorem recusandae doloremque, atque maiores tenetur.
        </p>
        <button @click="showModal = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modalView {
  text-align: center;
  padding: 20px;
}
.openButton {
  margin-bottom: 135px;
}
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
