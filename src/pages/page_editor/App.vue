<template>
    <div class="layout">
        <Resize :resizeAll="editorShow">
            <template v-slot:code>
                <CodeEdit :src="src" v-show="editorShow"></CodeEdit>
            </template>
            <template v-slot:earth>
                <EarthViewer :src="src" v-model:editorShow="editorShow"></EarthViewer>
            </template>
        </Resize>
    </div>
</template>

<script setup>
import CodeEdit from './components/CodeEdit.vue';
import EarthViewer from "./components/EarthViewer.vue"
import Resize from './components/Resize.vue';
import { onBeforeUnmount, onMounted, ref, toRaw, watch } from "vue";
import { getUrlParam } from "@/scripts/utils.js"
const src = ref(null)
const editorShow = ref(false)

onMounted(() => {
    let obj = getUrlParam()
    src.value = `./examples/${obj.id}/index.html`
})




</script>
<style scoped>
.layout {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
