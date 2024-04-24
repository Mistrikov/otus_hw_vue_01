export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}

export const randomNumber = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum)) + minNum

export const minNumber = (minNum, maxNum) => Math.min(maxNum, minNum)

export const getRandomItem = (array) => array[randomNumber(0, array.length - 1)]

function getNewABR(action) {
  if (action === '+') {
    const a = randomNumber(1, 50)
    const result = randomNumber(a, 100)
    const b = result - a
    return [a, b, result]
  }
  if (action === '*') {
    const a = randomNumber(1, 10)
    const b = randomNumber(1, 10)
    const result = a * b
    return [a, b, result]
  }
  if (action === '-') {
    const a = randomNumber(1, 100)
    const b = randomNumber(1, a)
    const result = a - b
    return [a, b, result]
  }
  if (action === '/') {
    const b = randomNumber(5, 10)
    const result = randomNumber(5, 10)
    const a = result * b
    return [a, b, result]
  }
}

function getQuestionString(a, b, action) {
  return `${a} ${action} ${b} =`
}

const isIn = (el, arr) => {
  return arr.indexOf(el) != -1
}

function getAnswers(a, b, r) {
  let result = []
  while (result.length < 3) {
    let x = randomNumber(r - 5, r + 5)
    if (!isIn(x, result) && x != r && x >= 0 && x <= 100) {
      result.push(x)
    }
  }
  return result
}

export const getNewZadanie = (action) => {
  const [a, b, answerRight] = getNewABR(action)
  return [getQuestionString(a, b, action), answerRight, getAnswers(a, b, answerRight)]
}
