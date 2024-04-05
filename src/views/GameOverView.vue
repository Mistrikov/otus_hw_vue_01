<script setup>
import LosePage from '../components/LosePage.vue'
import WinPage from '../components/WinPage.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

</script>


<template>
  <main>
    <div v-if="route.params.resultgame == 'lose'">
      <LosePage />
    </div>
    <div v-else>
      <WinPage />
    </div>
    <div class="px-4  my-4 text-center">
      <div class="col-lg-6 mx-auto">
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <RouterLink class="btn btn-primary btn-lg" to="/">Попробовать еще раз</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
