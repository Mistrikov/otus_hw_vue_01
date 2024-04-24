import { createStore } from 'vuex'

export const Store = createStore({
  state() {
    return {
      actions: [
        {
          name: '+',
          caption: 'Сложение',
          select: true
        },
        {
          name: '-',
          caption: 'Вычетание',
          select: false
        },
        {
          name: '*',
          caption: 'Умножение',
          select: false
        },
        {
          name: '/',
          caption: 'Деление',
          select: false
        }
      ],
      actionsSelect: false,
      playername: '',
      canStartGame: false
    }
  },
  mutations: {
    setPlayername(state, value) {
      state.playername = value
    },
    setActions(state, ind) {
      state.actions[ind].select = !state.actions[ind].select
    },
    setCanStartGame(state) {
      state.canStartGame = state.actionsSelect && state.playername.length > 3
    },
    setActionsSelect(state) {
      state.actionsSelect = state.actions.some((item) => {
        return item.select
      })
    }
  }
})
