<!--项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录-->
<template>
    <div id="prod">
        <!--<img src="../assets/logo.png">-->
        <app-header></app-header>
        <div class="prod">
            <ul>
                <li v-for="pro in prods" v-on:click="pro.show = !pro.show" :style="{background:'url('+ pro.path + ') no-repeat center',backgroundSize:'cover'}">
                    <h2>{{pro.name}}</h2>
                   <!-- <img v-show="pro.show" v-bind:src="pro.path"/>-->
                    <h3 v-show="pro.show">{{pro.hh}}</h3>
                </li>
            </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    //局部注册组件
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    export default {
        name: 'prod',
        data () {
            return {
                prods:[
                    //assets 要加require('') static的('')
                    {name:'一',path:('./static/image/1.png'),hh:'一路顺风',show:false},
                    {name:'二',path:('./static/image/2.png'),hh:'二龙腾飞',show:false},
                    {name:'三',path:('./static/image/3.png'),hh:'三羊开泰',show:false},
                    {name:'四',path:('./static/image/4.png'),hh:'四季平安',show:false},
                    {name:'五',path:('./static/image/5.png'),hh:'五福临门',show:false},
                    {name:'六',path:('./static/image/6.png'),hh:'六六大顺',show:false},
                    {name:'七',path:('./static/image/7.png'),hh:'七星高照',show:false},
                    {name:'八',path:('./static/image/8.png'),hh:'八方来财',show:false},
                    {name:'九',path:('./static/image/9.png'),hh:'九九同心',show:false},
                    {name:'十',path:('./static/image/10.png'),hh:'十全十美',show:false},
                    {name:'一',path:('./static/image/21.jpg'),hh:'一路顺风',show:false},
                    {name:'二',path:('./static/image/22.jpg'),hh:'二龙腾飞',show:false},
                    {name:'三',path:('./static/image/23.jpg'),hh:'三羊开泰',show:false},
                    {name:'四',path:('./static/image/24.jpg'),hh:'四季平安',show:false},
                    {name:'五',path:('./static/image/25.jpg'),hh:'五福临门',show:false},
                    {name:'六',path:('./static/image/26.jpg'),hh:'六六大顺',show:false},
                    {name:'七',path:('./static/image/27.jpg'),hh:'七星高照',show:false},
                    {name:'八',path:('./static/image/28.jpg'),hh:'八方来财',show:false},
                    {name:'九',path:('./static/image/29.jpg'),hh:'九九同心',show:false},
                    {name:'十',path:('./static/image/30.jpg'),hh:'十全十美',show:false},
                ]
            }
        },
        components:{
            "app-header":Header,
            "app-footer":Footer
        }
    }
</script>

<style>
    html,body{
        margin:0;
        padding:0;
    }
    .prod{
        widtd: 100%;
        max-width: 1000px;
        margin:40px auto;
        padding:0 20px;
        box-sizing: border-box;
    }
    .prod ul{
        display: flex;/*行排列*/
        flex-wrap: wrap;/*不超出容器*/
        list-style-type: none;
        padding: 0px;
    }
    .prod li{
        flex-grow: 2; /*如果一行只有一个，填满整行*/
        flex-basis: 200px; /*每一个宽度200px*/
        height:200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
    }
</style>
