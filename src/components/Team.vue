<script setup lang="ts">
import { ref } from 'vue'

import TeamListVue from './TeamList.vue';
import TeamBuilderVue from './TeamBuilder.vue';

const isOpenBuilder = ref<boolean>(true)
const teamSet = ref(new Array<number>())

const toggleBuilder = () => {
    isOpenBuilder.value = !isOpenBuilder.value
}

const onAddPokemon = (id: number) => {
    teamSet.value.push(id)
    toggleBuilder()
}
</script>

<template>
    <div class="container">
       <TeamListVue v-show="!isOpenBuilder" @add="toggleBuilder" :team="teamSet" />
       <TeamBuilderVue v-show="isOpenBuilder" @back="toggleBuilder" :select-pokemon="onAddPokemon" />
    </div>
</template>

<style scoped>
.container {
    width: 450px;
    height: 100vh;
    overflow-y: scroll;
}
</style>
