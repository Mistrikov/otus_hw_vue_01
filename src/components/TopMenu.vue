<script setup>
import { RouterLink, useRoute,  } from 'vue-router'
const route = useRoute()

</script>

<template>
  <nav>
  <ul class="nav nav-pills float-right">
    <li class="nav-item">
      <a class="nav-link"  href="/">Главная</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/settings">Настройки</a>
    </li>
  </ul>
  <h3 class="text-muted">Project name</h3>
  </nav>
</template>

<style scoped>

</style>
