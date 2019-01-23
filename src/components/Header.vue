<!--组件1-->
<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: 'app_header',
        data () {
            return {
                title:'新春快乐，猪年大吉！'
            }
        }
    }
</script>

<style scoped>
    header{
        background: lightskyblue;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>
