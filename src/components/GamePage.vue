<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { ref, computed, onMounted, onUnmounted } from 'vue'

const Store = useStore()
const router = useRouter()
const a = ref(0)
const b = ref(0)
const answers = ref([])
const answer = ref(0)
const actions = ref([])
const action = ref(0)
const maxNum = ref(0)
const NumberCount = ref(1)
const timeToAnswer = ref(10)
const maxTimeToAnswer = ref(15)
const gameTimer = ref(null)

const dynamicStyle = computed(() => ({
  width: `${Math.round(timeToAnswer.value / maxTimeToAnswer.value * 100)}%`,
}))

function changeProgressBar() {
  timeToAnswer.value = timeToAnswer.value - 0.1
  if (timeToAnswer.value <= 0) {
    clearTimeout(gameTimer.value)
    router.push({ name: 'gameover', params: { resultgame: 'lose' } }) // lose
  }
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const answerButtonClick = (num) => {
  clearTimeout(gameTimer.value)
  if (answer.value === num) {
    NumberCount.value += 1
    level(NumberCount.value)
  } else {
    router.push({ name: 'gameover', params: { resultgame: 'lose' } })
  }
}

function level(n) {
  if (n === 6) {
    clearTimeout(gameTimer.value)
    router.push({ name: 'gameover', params: { resultgame: 'win' } })
  }
  answers.value = []
  action.value = actions.value[Math.floor(Math.random() * actions.value.length)];
  timeToAnswer.value = maxTimeToAnswer.value
  if (action.value === '+') {
    maxNum.value = 50
    a.value = Math.floor(Math.random() * maxNum.value) + 1
    answer.value = Math.floor(Math.random() * 50) + maxNum.value
    b.value = answer.value - a.value
    answers.value.push(answer.value)
    answers.value.push(answer.value + 1)
    answers.value.push(answer.value - 1)
    answers.value.push(answer.value + 2)
    shuffle(answers.value)
  } else if (action.value === '*') {
    maxNum.value = 10
    a.value = Math.floor(Math.random() * maxNum.value) + 1
    b.value = Math.floor(Math.random() * maxNum.value) + 1
    answer.value = a.value * b.value
    answers.value.push(answer.value)
    answers.value.push(answer.value + a.value)
    answers.value.push(answer.value - 1)
    answers.value.push(answer.value + b.value)
    shuffle(answers.value)
  } else if (action.value === '-') {
    maxNum.value = 100
    a.value = Math.floor(Math.random() * maxNum.value) + 1
    b.value = Math.floor(Math.random() * a.value)
    answer.value = a.value - b.value
    answers.value.push(answer.value)
    answers.value.push(answer.value + a.value)
    answers.value.push(answer.value - 1)
    answers.value.push(answer.value + b.value)
    shuffle(answers.value)
  } else if (action.value === '/') {
    maxNum.value = 10
    b.value = Math.floor(Math.random() * maxNum.value) + 1
    answer.value = Math.floor(Math.random() * maxNum.value) + 1
    a.value = b.value * answer.value
    answers.value.push(answer.value)
    answers.value.push(answer.value + a.value)
    answers.value.push(answer.value - 1)
    answers.value.push(answer.value + b.value)
    shuffle(answers.value)
  }
  gameTimer.value = setInterval(changeProgressBar, 100)
}

onUnmounted(() => {
  clearTimeout(gameTimer.value)
})

onMounted(() => {
  for (let i = 0; i < 4; i++) {
    if (Store.state.actions[i]) {
      actions.value.push(Store.state.operations[i])
    }
  }
  level(NumberCount.value)
})



</script>

<template>
  <div class="px-4 text-center">
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 justify-content-sm-center">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ `${a} ${action} ${b} =` }}</h1>
        <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style="dynamicStyle" aria-valuenow="10" aria-valuemin="0"
            aria-valuemax="100">{{ Math.round(timeToAnswer * 10) / 10 }}
          </div>
        </div>
        <div class="btn-group gap-2" role="group">
          <div v-for="(i, index) in answers" :key="index">
            <button class="btn btn-info btn-circle" @click="answerButtonClick(i)">{{ i }}</button>
          </div>
        </div>
        <RouterLink class="btn btn-secondary btn-lg px-4 gap-3" to="/gameover/lose">Сдаюсь
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
