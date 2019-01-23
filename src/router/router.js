/**
 * Created by LenzeGame-ACER-i5940 on 2019/1/22.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

//配置路由
export default new Router ({
    routes:[
        {
            path:'/',
            //name:'Home',
            //component:Home
            component:function (e) {
                require(['../components/Home.vue'],e)
            }
        },
        {
            path:'/map',
            component:function (e) {
                require(['../views/MapView.vue'],e)
            }
        },
        {
            path:'/prod',
            component:function (e) {
                require(['../views/product.vue'],e)
            }
        },
    ],
    mode:'history'//消除访问路径的#
})
