<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goHome = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}

const goToPost3 = () => {
  router.push({ name: 'post', params: { id: 3 } })
}

const showPostId = () => {
  alert('The post ID is ' + route.params.id)
}
</script>

<template>
  <div class="post-details">
    <h1>Post Details</h1>
    <p>Display the details of a post with the ID {{ $route.params.id }}</p>
    <div class="buttons">
      <button @click="goHome">Go Home</button>
      <button @click="goToPost3">Go to Post 3</button>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div class="backWrapper">
      <RouterLink class="back" to="/post-list">&lt; Back</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.post-details {
  text-align: center;
  padding: 20px;
}
.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.buttons button {
  margin: 0 10px;
}
.backWrapper {
  margin-top: 15px;
  margin-bottom: 55px;
}
</style>
