<!--组件1-->
<template>
    <div class="vueMap">
        <div class="amap-wrapper">
            <el-amap class="amap-box" :id="'amap-vue'"></el-amap>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMap from 'vue-amap';
    Vue.use(VueMap);
    VueMap.initAMapApiLoader({
        key: '9c51160677f0ab3b1c6b61d4790f78cd',//key值
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
        v: '1.4.5'
    });

    export default {
        name: 'vueMap',
        data () {
            return {
            }
        },
    };
</script>

<style scoped>
    .amap-wrapper {
        max-width: 100%;
        min-width: 260px;
        height: 500px;
        padding:5%;
    }
</style>
