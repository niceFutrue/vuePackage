<!--项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录-->
<template>
    <div id="home">
        <!--    <img src="./assets/logo.png">-->
        <app-header></app-header>
        <users v-bind:users="users"></users>
        <app-footer></app-footer>
    </div>
</template>

<script>
    //局部注册组件
    import Header from './Header'
    import Users from './Users'
    import Footer from './Footer'
    export default {
        name: 'home',
        data () {
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
        },
        components:{
            "app-header":Header,
            Users,
            "app-footer":Footer
        }
    }
</script>

<style>
    html,body{
        margin:0;
        padding:0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: lightseagreen;
        #margin-top: 60px;
    }
</style>
