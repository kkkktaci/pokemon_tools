<script setup lang="ts">
import TypeBadge from './TypeBadge.vue'
import StatItem from './StatItem.vue'

defineProps<{
    pokemon: Pokemon,
}>()

defineEmits<{
    (e: 'select', id: number): void
}>()
</script>

<template>
    <li class="builder-item" @click="$emit('select', pokemon.id)">
        <div class="wrapper">
            <img class="pokemon-sprite" :src="pokemon.sprite" />
            <span class="name">{{pokemon.name}}</span>
            <div class="types">
                <TypeBadge
                    v-for="type in pokemon.types"
                    :key="type"
                    :type-name="type"
                />
            </div>
            <div class="stats">
                <StatItem v-for="stat in pokemon.stats" :stat-name="stat.name" :base-state="stat.baseStat" />
            </div>
        </div>
    </li>
</template>

<style scoped>
.builder-item {
    width: 100%;
    height: 36px;
    cursor: pointer;
}

.builder-item:hover {
    background-color: antiquewhite;
}

.wrapper {
    display: flex;
    flex-direction: row;
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

.types {
    width: 70px;
    text-align: start;
}

.stats {
    display: flex;
    flex-direction: row;
    margin-left: 16px;
}
</style>
