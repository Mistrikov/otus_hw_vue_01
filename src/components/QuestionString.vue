<script setup>
const props = defineProps({
    questionString: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <h1 class="display-5 fw-bold text-body-emphasis">{{ props.questionString }}</h1>
</template>
<style scoped></style>