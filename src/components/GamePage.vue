<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  game: {
    actions: Array,
    playername: String,
    required: true
  }
})
</script>

<template>
  <div class="px-4 py-4 my-4 text-center">
    <img class="d-block mx-auto mb-4" src="../assets/logo.jpg" alt="" width="72" height="57" />
    <h1 class="display-5 fw-bold text-body-emphasis">Устный счёт</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Считай, думай, побеждай - мозг устным счетом прокачай!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <p class="lead mb-4">... Здесь будет игра ...</p>
        <hr />
        <RouterLink class="btn btn-secondary btn-lg" to="/">Назад</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
