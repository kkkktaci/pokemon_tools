<script setup lang="ts">
import { ref, computed } from 'vue'

import { Types, MOVES, TYPE_RESTRAIN } from 'src/data'

import TypeCell from './TypeCell.vue';

// Test 毒 冰
const selectedAbiIds = ref([40, 8]) 

const allTypes = computed(() => {
    const ms = MOVES.filter(move => selectedAbiIds.value.includes(move.id))
    return ms.map(m => m.type)
})

const strengthsTypes = computed(() => {
    const ms = MOVES.filter(move => selectedAbiIds.value.includes(move.id))
    return ms.flatMap(m => TYPE_RESTRAIN[m.type].strengths)
})
</script>

<template>
    <div class="horizontal">
        <div v-for="(xType, xidx) in Types">
            <div v-for="(yType, yidx) in Types" class="cell" :key="xType.type+yType.type">
                <!-- 己方属性 -->
                <div
                    v-if="xidx === 0"
                    :style="{ backgroundColor: yType.primaryColor, position: 'absolute', top: 0, left: '-50px' }"
                    class="type-cell"
                >
                    {{yType.zhName}}{{allTypes.includes(yType.type) ? '@' : ''}}
                </div>
                <!-- 对方属性 -->
                <div
                    v-if="yidx === 0"
                    :style="{ backgroundColor: xType.primaryColor, position: 'absolute', top: '-24px', left: 0 }"
                    class="type-cell"
                >
                    {{xType.zhName}}{{strengthsTypes.includes(xType.type) ? '⬆' : ''}}
                </div>
                <TypeCell :playerType="yType" :opponentType="xType" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}

.cell {
    position: relative;
    height: 24px;
    border-color: black;
    border-width: 0.5px;
    border-style: solid;
    box-sizing: border-box;
}
</style>
