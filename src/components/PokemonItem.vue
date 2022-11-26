<script setup lang="ts">
import TypeBadge from './TypeBadge.vue'

defineProps<{
    pokemon: Pokemon,
    moves: Move[]
}>()
</script>

<template>
    <li>
        <div class="pokemon">
            <div class="icon-section">
                <img class="icon" :src="pokemon.sprite" />
                <div class="type-section">
                    <TypeBadge
                        v-for="type in pokemon.types"
                        :key="type"
                        :type-name="type"
                    />
                </div>
                <span class="name">{{pokemon.name}}</span>
            </div>
            <div>
                <span class="move-title">Moves</span>
            </div>
        </div>
    </li>
</template>

<style scoped>
.pokemon {
    display: flex;
    flex-direction: row;
    height: 130px;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: #dae5f0;
    padding: 4px;
}

.icon-section {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    justify-content: space-between;
}

.icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

.name {
    font-weight: bold;
}

.type-section {
    height: 14px;
}

.move-title {
    font-weight: bold;
}
</style>
