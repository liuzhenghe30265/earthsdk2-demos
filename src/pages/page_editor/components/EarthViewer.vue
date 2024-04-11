<template>
    <div class="panel">
        <div class="header">
            <div class="left">
                <div class="box" @click="changeEditorShow">
                    <img src="../assets/code.png" alt="" width="25" height="25">
                    <p> {{ editorShow ? '收起源代码' : '查看源代码' }}</p>
                </div>

            </div>
            <div class="middle">
                示例教程—{{ title }}
            </div>
            <div class="right">
                <div class="box">
                    <img src="../assets/code.png" alt="" width="25" height="25">
                    <p @click="turnUrl('https://wzonfjgpzd.feishu.cn/docx/NUssdX48WobIqlxU9dFcaRDhnwc')">教程</p>
                </div>
                <div class="box">
                    <img src="../assets/jiaocheng.png" alt="" width="18" height="18">
                    <p @click="turnUrl('https://www.wolai.com/earthsdk/nrp963KZyrXAtmGgUeuLRo')">文档</p>
                </div>

                <div class="box">
                    <img src="../assets/load.png" alt="" width="18" height="18">
                    <p @click="turnUrl('https://gitee.com/cesiumlab/earthsdk2-examples')">下载源码</p>
                </div>

                <div class="box">
                    <img src="../assets/-zixun.png" alt="" width="18" height="18">
                    <button @click="viewVersion" class="box-info">版本信息</button>
                    <div class="box-version" v-show="versionShow">
                        <div>"esobjs-xe2-plugin": "0.1.50"</div>
                        <div>"vue-xe2-plugin": "0.1.5"</div>

                    </div>
                </div>
            </div>
        </div>
        <iframe :src="src"></iframe>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, toRaw, defineProps, defineEmits } from "vue";
import axios from "axios";
const emits = defineEmits(['update:editorShow'])
import { getUrlParam } from "@/scripts/utils.js"
const props = defineProps({
    src: {
        type: String,
        required: false
    },
    editorShow: {
        type: Boolean,
        default: false,
        required: false
    }
})
const versionShow = ref(false);
const viewVersion = () => {
    versionShow.value = !versionShow.value;
}
const editorShow = ref(props.editorShow)
const title = ref('')


function changeEditorShow() {
    console.log(editorShow.value)
    editorShow.value = !editorShow.value
    console.log(editorShow.value)
    emits('update:editorShow', editorShow.value)
}

function getTitle(id, data) {
    if (Array.isArray(data)) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            if (item.path == id) {
                title.value = item.name
            }
            if (item.children && item.children.length > 0) {
                getTitle(id, item.children)
            }
        }

    }
}

function turnUrl(url) {
    window.open(url)
}

onMounted(() => {
    const obj = getUrlParam()
    axios.get("./data/example.json").then(res => {
        getTitle(obj.id, res.data)
    })

})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
})

</script>

<style scoped>
.box-info {
    position: relative;
    background: #141414;
    border: none;
    color: #1690d9;
    font-weight: 700;

}

.box-version {
    position: absolute;
    top: 5%;
    right: 1%;
    width: 15%;
    background-color: #525455;
    color: #fff;
    padding: 10px;
    border-radius: 4px;

}

.panel {
    width: 100%;
    height: 100%;
}

p {
    padding: 0px;
    margin: 0px;
}

iframe {
    display: block;
    width: 100%;
    height: calc(100% - 40px);
    margin: 0px;
    padding: 0px;
    border: none;
    box-sizing: border-box;
}

.header {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    background: #141414;
    display: flex;
    justify-content: space-between;
}

.left {
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #1690d9;
    font-size: 14px;
    font-weight: bold;
}

.middle {
    display: flex;
    align-items: center;
    color: #fff;
}

.right {
    display: flex;
    padding-right: 10px;
    box-sizing: border-box;
    height: 100%;
    cursor: pointer;
    line-height: 40px;
    color: #1690d9;
    font-size: 14px;
    font-weight: bold;
}

.box {
    display: flex;
    align-items: center;
    padding: 10px
}

.box>p:hover {
    color: #2fb3ff;
}
</style>
