<script setup lang="ts">
import { computed } from 'vue'
import { TYPE_RESTRAIN } from 'src/data'

const props = defineProps<{
    playerType: Type,
    opponentType: Type
}>()

const isStrengths = TYPE_RESTRAIN[props.playerType.type].strengths.includes(props.opponentType.type)
const isWeakness = TYPE_RESTRAIN[props.playerType.type].weaknesses.includes(props.opponentType.type)
const isUnused = TYPE_RESTRAIN[props.playerType.type].unused.includes(props.opponentType.type)

let powerValue = '1'
if (isStrengths) {
    powerValue = '2'
} else if (isWeakness) {
    powerValue = '1/2'
} else if (isUnused) {
    powerValue = '0'
}
</script>

<template>
    <div class="type-cell container" :class="{ unused: isUnused, strengths: isStrengths, weakness: isWeakness }">
        {{powerValue}} x
    </div>
</template>

<style scoped>
.container {
    font-size: 14px;
}

.unused {
    background-color: black;
    color: white;
}

.strengths {
    background-color: darkcyan;
    color: white;
}

.weakness {
    background-color: brown;
    color: white;
}
</style>
