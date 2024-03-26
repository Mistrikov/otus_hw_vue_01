<script setup>
import PeopleCircle from '../components/icons/PeopleCircle.vue'
//import SettingsButton from '../components/SettingsButton.vue'
import { ref } from 'vue'
/*
  Parent -> Child: props
  Child -> Parent: emit event
*/
const props = defineProps(['actions', 'playername'])
const emit = defineEmits(['press', 'edit'])
const label = ref(['Сложение', 'Вычетание', 'Умножение', 'Деление'])
const gamerName = ''


</script>
<template>
    <div class="px-4 text-center">
        <div class="row justify-content-center">
            <div class="col-4">
                <h3>Игрок</h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="playername_edt">
                        <PeopleCircle />
                    </span>
                    <input type="text" class="form-control" placeholder="Имя игрока" aria-label="Имя игрока"
                        v-model="gamerName" aria-describedby="basic-addon1" @input="emit('edit', gamerName)">
                </div>
            </div>
            <div class="col-4 d-grid gap-2">
                <h3>Выбери действия</h3>
                <div class="d-grid gap-2" v-for="(i, index) in  label " :key="index">
                    <input type="checkbox" class="btn-check" :id="index" :checked="props.actions[index]"
                        autocomplete="off" @click="emit('press', index)">
                    <label class="btn btn-outline-primary" :for="index">{{ i }}</label>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>