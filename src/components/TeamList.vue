<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPokemonsByIds, getMoveByName } from 'src/helper'

import PokemonItemVue from './PokemonItem.vue';

const props = defineProps<{
    team: number[]
}>()

defineEmits<{
    (e: 'add'): void
}>()

const selectedPokemon = ref<number | null>(null)
const pokemonMovesMap = ref(new Map<number, string[]>())

const pokemons = computed(() => getPokemonsByIds(props.team))

const selectPokemon = (id: number) => {
    selectedPokemon.value = id
}

const getPokemonMoves = (id: number): Move[] => {
    if (!pokemonMovesMap.value.has(id)) return []
    return pokemonMovesMap.value.get(id)?.map(moveName => getMoveByName(moveName))
}
</script>

<template>
    <div>
        <ul class="list">
            <PokemonItemVue
                v-for="pokemon in pokemons"
                :key="pokemon.id"
                :pokemon="pokemon"
                :moves="getPokemonMoves(pokemon.id)"
            />
        </ul>
        <button class="add-button" @click="$emit('add')">➕ Add Pokemon</button>
    </div>
</template>

<style scoped>
.list {
    list-style-type: none;
    padding-inline-start: 0;
}

.add-button {
    width: 150px;
    height: 30px;
    padding: 5px 10px;
    background-color: white;
    border: 1px solid black;
    color: black;
}
</style>
