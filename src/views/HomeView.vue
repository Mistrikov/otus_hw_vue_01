<script setup>
import SettingsForm from '../components/SettingsForm.vue'
import StartPage from '../components/StartPage.vue'
import { ref } from 'vue'

const actions = ref([true, false, false, false])
const playername = ref('')
const canStartGame = ref(false)

const registerClick = (symb) => {
  actions.value[Number(symb)] = !actions.value[Number(symb)]
  canStartGame.value = (actions.value.indexOf(true) > -1) && playername.value.length > 3
  console.log(actions.value)
}
const playernameEdit = (text) => {
  playername.value = text
  canStartGame.value = (actions.value.indexOf(true) > -1) && playername.value.length > 3
  console.log(playername.value)
}

</script>

<template>
  <main>
    <StartPage :canStartGame="canStartGame" />
    <SettingsForm @press="registerClick" :actions="actions" :playername="playername" @edit="playernameEdit" />
  </main>
</template>

<style scoped></style>
