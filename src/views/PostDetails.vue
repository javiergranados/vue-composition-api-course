<template>
  <div class="post-details">
    <h1>Post Details</h1>
    <p>Display the details of a post with the ID {{ $route.params.id }}</p>
    <div class="backWrapper">
      <RouterLink class="back" to="/post-list">&lt; Back</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.post-details {
  padding: 20px;
}
h1 {
  text-align: center;
}
.backWrapper {
  margin-top: 15px;
  margin-bottom: 95px;
}
</style>
