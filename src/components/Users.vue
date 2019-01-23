<!--组件1-->
<template>
    <div class="users">
        <h1>快乐才是你的美</h1>
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.hh}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        props:["users"],
       /* data () {
            return {
               users:[
                   {name:'一',hh:'一路顺风',show:false},
                   {name:'二',hh:'二龙腾飞',show:false},
                   {name:'三',hh:'三羊开泰',show:false},
                   {name:'四',hh:'四季平安',show:false},
                   {name:'五',hh:'五福临门',show:false},
                   {name:'六',hh:'六六大顺',show:false},
                   {name:'七',hh:'七星高照',show:false},
                   {name:'八',hh:'八方来财',show:false},
                   {name:'九',hh:'九九同心',show:false},
                   {name:'十',hh:'十全十美',show:false},
               ]
            }
        }*/
    }
</script>

<style scoped>
    .users{
        widtd: 100%;
        max-width: 1000px;
        margin:40px auto;
        padding:0 20px;
        box-sizing: border-box;
    }
    ul{
        display: flex;/*行排列*/
        flex-wrap: wrap;/*不超出容器*/
        list-style-type: none;
        padding: 0px;
    }
    li{
        flex-grow: 1;/*如果一行只有一个，填满整行*/
        flex-basis: 200px;/*每一个宽度200px*/
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
    }
</style>
