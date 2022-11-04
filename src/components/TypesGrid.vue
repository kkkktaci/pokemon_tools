<script setup lang="ts">
import { Types } from 'src/data'
</script>

<template>
    <div class="horizontal">
        <div v-for="(xType, xidx) in Types">
            <div v-for="(yType, yidx) in Types" class="cell" :key="xType.type+yType.type">
                <div v-if="xidx === 0" :style="{ backgroundColor: yType.primaryColor, position: 'absolute', top: 0, left: '-50px' }" class="inner-cell">
                    {{yType.zhName}}
                </div>
                <div v-if="yidx === 0" :style="{ backgroundColor: xType.primaryColor, position: 'absolute', top: '-24px', left: 0 }" class="inner-cell">
                    {{xType.zhName}}
                </div>
                <div class="inner-cell">
                    {{yType.zhName}} : {{xType.zhName}}
                </div>
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

.inner-cell {
    width: 50px;
    height: 24px;
    box-sizing: border-box;
}
</style>
