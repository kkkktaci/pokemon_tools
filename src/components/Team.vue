<script setup lang="ts">
import { ref } from 'vue'

import TeamListVue from './TeamList.vue';
import TeamBuilderVue from './TeamBuilder.vue';

const isOpenBuilder = ref(true)

const toggleBuilder = () => {
    isOpenBuilder.value = !isOpenBuilder.value
}
</script>

<template>
    <div class="container">
       <TeamListVue v-show="!isOpenBuilder" @add="toggleBuilder" />
       <TeamBuilderVue v-show="isOpenBuilder" @back="toggleBuilder" />
    </div>
</template>

<style scoped>
.container {
    width: 450px;
    height: 100vh;
    overflow-y: scroll;
}
</style>
