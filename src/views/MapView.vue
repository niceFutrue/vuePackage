<!--组件1-->
<template>
  <div id="vueMap">
      <a>{{title}}</a>
      <app-header></app-header>
      <app-map></app-map>
      <app-footer></app-footer>
  </div>
</template>

<script>
    //注册模板
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    import VueMap from '../components/Map'
    export default {
    name: 'vueMap',
    data () {
        return {
            title:'你好，世界'
        }
    },
    components:{
        "app-header":Header,
        "app-footer":Footer,
        "app-map":VueMap
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {  font-weight: normal;  }
ul {list-style-type: none;  padding: 0;  }
li {display: inline-block;  margin: 0 10px;  }
a {color: #42b983;  }

</style>
