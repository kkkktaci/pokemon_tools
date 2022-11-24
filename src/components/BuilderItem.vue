<script setup lang="ts">
import TypeBadge from './TypeBadge.vue'

defineProps<{
    pokemon: Pokemon
}>()
</script>

<template>
    <li class="builder-item">
        <div class="wrapper">
            <img class="pokemon-sprite" :src="pokemon.sprite" />
            <span class="name">{{pokemon.name}}</span>
            <TypeBadge
                v-for="type in pokemon.types"
                :key="type"
                :type-name="type"
            />
        </div>
    </li>
</template>

<style scoped>
.builder-item {
    width: 100%;
    height: 36px;
}

.builder-item:hover {
    background-color: antiquewhite;
}

.wrapper {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.name {
    width: 128px;
    font-size: 1em;
    white-space: nowrap;
    font-weight: 500;
    text-align: start;
}

.pokemon-sprite {
    width: 40px;
    height: 30px;
    object-fit: contain;
}
</style>
