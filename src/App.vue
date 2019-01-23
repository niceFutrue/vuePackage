<!--项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录-->
<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
      <div class="app_header">
          <ul class="app_header_ul">
              <li ><router-link to="/">首页</router-link></li>
              <li ><router-link to="/prod">产品</router-link></li>
              <li ><router-link to="/map">Map</router-link></li>
              <li ><router-link to="/">查找设备</router-link></li>
          </ul>
      </div>
      <router-view/>
  </div>
</template>

<script>
//局部注册组件
export default {
    name: 'App',
  /*  data () {
        return {
        }
    },*/
}
</script>

<style>
    html,body,ul,li{
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
    .app_header{
        width:100%;
        height:48px;
        position: sticky;
        top: 0px;
        line-height:48px;
        background: #333;
        opacity: 0.8;
        z-index: 999;
    }
    .app_header_ul{
        max-width:980px;
        list-style-type:none;
        display: flex;
        flex-wrap: wrap;
        background: #333;
        margin:auto;
        padding:0 22px;
        height: inherit;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .app_header_ul li{
        text-align: center;
        flex-basis:100px;
    }
    a{
        text-decoration: none;
        color: seashell;
    }
</style>
