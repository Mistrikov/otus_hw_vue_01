<script setup>
import PeopleCircle from '../components/icons/PeopleCircle.vue'
import { onUpdated } from 'vue'
import { useStore } from 'vuex';

const Store = useStore()

onUpdated(() => {
    Store.commit('setActionsSelect')
    Store.commit('setCanStartGame')
})

const playernameEdit = (el) => {
    Store.commit('setPlayername', el.target.value)
}

const actionsClick = (ind) => {
    Store.commit('setActions', ind)
}

</script>
<template>
    <div class="px-4 my-4 text-center">
        <div class="col-lg-6 mx-auto">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <span v-if="!Store.state.canStartGame">
                    <RouterLink class="btn btn-secondary btn-lg px-4 gap-3 disabled" to="/game">Начать игру
                    </RouterLink>
                </span>
                <span v-else>
                    <RouterLink class="btn btn-danger btn-lg px-4 gap-3 " to="/game">Начать игру
                    </RouterLink>
                </span>
            </div>
        </div>
        <div class="px-6 text-center">
            <div class="row justify-content-center">
                <div class="col-4">
                    <h3>Имя игрока</h3>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="playername_edt">
                            <PeopleCircle />
                        </span>
                        <input type="text" class="form-control" placeholder="Имя игрока" aria-label="Имя игрока"
                            required aria-describedby="basic-addon1" :value="Store.state.playername"
                            @input="playernameEdit">
                    </div>

                </div>
                <div class="col-4 d-grid gap-2">
                    <h3>Тренировать:</h3>
                    <div class="d-grid gap-2" v-for="(i, index) in Store.state.actions" :key="index">
                        <input type="checkbox" class="btn-check" :id="index" :checked="i.select" autocomplete="off"
                            @click="actionsClick(index)">
                        <label class="btn btn-outline-primary" :for="index">{{ i.caption }}</label>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>


</template>