<script setup lang="ts">
import { POKEMONS } from 'src/data'

import BuilderItemVue from './BuilderItem.vue';

defineEmits<{
    (e: 'back'): void
}>()
</script>

<template>
    <div>
        <button class="back-button" @click="$emit('back')">&lt; Team</button>
        <ul class="builder-list">
            <BuilderItemVue v-for="pokemon in POKEMONS" :key="pokemon.id" :pokemon="pokemon" />
        </ul>
    </div>
</template>

<style scoped>
.back-button {
    padding: 0;
    width: 60px;
    height: 20px;
    background-color: white;
    border: 1px solid black;
    color: black;
    font-size: 0.5em;
}
.builder-list {
    padding-inline-start: 0;
    list-style-type: none;
    padding: 0;
    margin: 0;
}
</style>
