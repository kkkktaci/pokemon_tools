<script setup lang="ts">
import { shortStatName } from 'src/helper'

const props = defineProps<{
    statName: string,
    baseState: number
}>()

const shortName = shortStatName(props.statName)
</script>

<template>
    <div class="stat">
        <span class="name">{{shortName}}</span>
        <br>
        {{baseState}}
    </div>
</template>

<style scoped>
.stat {
    font-size: 0.3em;
    width: 24px;
}

.name {
    color: gray;
}
</style>
