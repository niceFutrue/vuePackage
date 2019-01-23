<!--组件1-->
<template>
    <footer>
        <h1>{{title}}</h1>
    </footer>
</template>

<script>
    export default {
        name: 'app_footer',
        data () {
            return {
                title:'Copyright ©2019 版权所有 粤ICP备88888888号-8'
            }
        }
    }
</script>

<style scoped>
    footer{
        background: linen;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>
