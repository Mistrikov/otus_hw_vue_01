<script setup>
import PeopleCircle from '../components/icons/PeopleCircle.vue'
</script>
<template>
    <div class="px-4 text-center">
        <form>
            <div class="row ">
                <div class="col">
                    <h3>Игрок</h3>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="playername">
                            <PeopleCircle />
                        </span>
                        <input type="text" class="form-control" placeholder="Имя игрока" aria-label="Имя игрока"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col d-grid gap-2">
                    <h3>Выбери действия</h3>
                    <input type="checkbox" class="btn-check" id="btn-action-plus" checked autocomplete="off">
                    <label class="btn btn-outline-primary" for="btn-action-plus">Сложение</label>
                    <input type="checkbox" class="btn-check" id="btn-action-minus" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btn-action-minus">Вычитание</label>
                    <input type="checkbox" class="btn-check" id="btn-action-multi" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btn-action-multi">Умножение</label>
                    <input type="checkbox" class="btn-check" id="btn-action-div" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btn-action-div">Деление</label>
                </div>
            </div>
        </form>
        <br />
    </div>
</template>