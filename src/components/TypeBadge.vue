<script setup lang="ts">
import { getTypePrimaryColor } from 'src/helper'
const props = defineProps<{ typeName: string }>()

const primaryColor = getTypePrimaryColor(props.typeName)
</script>

<template>
    <span class="type" :style="{ backgroundColor: primaryColor }">
        {{typeName}}
    </span>
</template>

<style>
.type {
    height: 14px;
    font-size: 0.5em;
    margin: auto 0;
    border-radius: 4px;
    border: 1px solid gray;
    color: white;
}

.type:first {
    margin-right: 4px;
}
</style>
