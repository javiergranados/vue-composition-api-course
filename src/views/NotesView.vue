<template>
  <div class="notes">
    <div class="card has-background-success-on-scheme p-4">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Write a new note..."
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add</button>
        </div>
      </div>
    </div>
    <div
      v-for="i in 3"
      :key="i"
      class="card"
    >
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
      <footer class="card-footer">
        <a
          href="#"
          class="card-footer-item"
          >Edit</a
        >
        <a
          href="#"
          class="card-footer-item"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>
