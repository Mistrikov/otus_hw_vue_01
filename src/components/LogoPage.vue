<script setup>
import { computed } from 'vue'
const props = defineProps({
  logoimg: {
    type: String,
    default: "logo.jpg",
  },
});
const logoimage = computed(() => `src/assets/${props.logoimg}`)
</script>

<template>
  <div class="px-4 my-2 text-center">
    <img class="d-block mx-auto mb-4" :src="logoimage" alt="" width="72" height="57" />
    <h1 class="display-5 fw-bold text-body-emphasis">Устный счёт</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Считай, думай, побеждай - мозг устным счетом прокачай!</p>
    </div>
  </div>
</template>

<style scoped></style>
