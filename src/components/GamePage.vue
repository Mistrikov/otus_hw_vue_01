<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { shuffle, getRandomItem, getNewZadanie } from '../utils/utils.js'
import QuestionString from '../components/QuestionString.vue'

const Store = useStore()
const router = useRouter()
const answerButtons = ref([])
const answerRight = ref(0)
const actions = ref([])
const questionString = ref(null)
const NumberCount = ref(1)
const timeToAnswer = ref(15)
const maxTimeToAnswer = ref(15)
const gameTimer = ref(null)

onUnmounted(() => {
  clearTimeout(gameTimer.value)
})

onMounted(() => {
  NumberCount.value = 1
  actions.value = Store.state.actions.filter(item => item.select)
  newLevel()
})

const dynamicStyle = computed(() => ({
  width: `${Math.round(timeToAnswer.value / maxTimeToAnswer.value * 100)}%`,
}))

const gameTimeLeft = computed(() => Math.round(timeToAnswer.value * 10) / 10)

function gameOver(result) {
  clearTimeout(gameTimer.value)
  if (result) router.push({ name: 'gameover', params: { resultgame: 'win' } }) // победа
  else router.push({ name: 'gameover', params: { resultgame: 'lose' } }) // проигрыш
}

function changeProgressBar() {
  timeToAnswer.value -= 0.1
  if (timeToAnswer.value <= 0) {
    gameOver(false)
  } else {
    gameTimer.value = setTimeout(changeProgressBar, 100)
  }
}

const answerButtonClick = (num) => {
  if (answerRight.value !== num) {
    gameOver(false)
  }
  NumberCount.value++
  if (NumberCount.value === 6) {
    gameOver(true)
  } else {
    newLevel()
  }
}

function newLevel() {
  clearTimeout(gameTimer.value)
  timeToAnswer.value = maxTimeToAnswer.value
  const [_questionString, _answerRight, _answersWrong] = (getNewZadanie(getRandomItem(actions.value).name))
  answerRight.value = _answerRight
  questionString.value = _questionString
  answerButtons.value = shuffle([answerRight.value, ..._answersWrong])
  gameTimer.value = setTimeout(changeProgressBar, 100)
}

</script>

<template>
  <div class="px-4 text-center">
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 justify-content-sm-center">
        <QuestionString :questionString='questionString' />
        <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:style="dynamicStyle" aria-valuenow="15" aria-valuemin="0"
            aria-valuemax="100">{{ gameTimeLeft }}
          </div>
        </div>
        <div class="btn-group gap-2" role="group">
          <div v-for="(  i, index  ) in  answerButtons  " :key="index">
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
