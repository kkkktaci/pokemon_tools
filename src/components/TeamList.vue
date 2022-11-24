<script setup lang="ts">
defineEmits<{
    (e: 'add'): void
}>()
</script>

<template>
    <button class="add-button" @click="$emit('add')">➕ Add Pokemon</button>
</template>

<style scoped>
.add-button {
    width: 150px;
    height: 30px;
    padding: 5px 10px;
    background-color: white;
    border: 1px solid black;
    color: black;
}
</style>
