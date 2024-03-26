<script setup>

const props = defineProps(['ind', 'btnlabel', 'mycheck'])
</script>

<template>
  <input type="checkbox" class="btn-check" :id="props.ind" :checked="props.mycheck" autocomplete="off">
  <label class="btn btn-outline-primary" :for="props.ind">{{ props.btnlabel }}</label>
</template>

<style scoped></style>
