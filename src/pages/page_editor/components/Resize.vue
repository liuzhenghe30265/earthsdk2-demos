<template>
    <div class="box">
        <div class="left" :style="{ width: leftWidth + 'px' }" v-show="resizeAll">
            <slot name="code"></slot>
        </div>
        <div class="resize" @mousedown="dragEagle" @mouseover.prevent="showBar = true" @mouseout.prevent="showBar = false"
            :style="{ left: (leftWidth - 2) + 'px', opacity: opacityVal }" v-show="resizeAll">
        </div>
        <div class="right" :style="{ width: `calc(100% - ${leftWidth}px)` }" :class="(!resizeAll) ? 'resize-all' : ''">
            <slot name="earth"></slot>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
defineProps({
    resizeAll: {
        type: Boolean,
        required: false,
        default: true
    },

})
const leftWidth = ref(800)
const showBar = ref(false)
const dragEagle = (e) => {
    if (!showBar.value) return
    const leftDomWidth = leftWidth.value
    const startX = e.clientX
    onmousemove = function (e) {
        e.preventDefault()
        const distX = Math.abs(e.clientX - startX)
        if (e.clientX > startX) {
            leftWidth.value = leftDomWidth + distX
        } else {
            leftWidth.value = leftDomWidth - distX
        }
    }
    onmouseup = function () {
        onmousemove = null
    }
}
const opacityVal = computed(() => {
    if (showBar.value) {
        return 1
    } else {
        return 0
    }
})
</script>
<style scoped>
.box {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
}

.left {
    height: 100%;
    background-color: #001921;
}

.resize {
    width: 4px;
    position: absolute;
    z-index: 1;
    height: 100%;
    border: none;
    background-color: #004052;
    cursor: col-resize;
    transition: opacity 0.2s ease;
}

.right {
    height: 100%;
}

.resize-all {
    width: 100% !important;
    height: 100% !important;
}
</style>
