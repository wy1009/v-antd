import Vue from 'vue'
import VueRouter from 'vue-router'
// 正式打包测试时使用
// import vAntd from './dist/v-antd.js'
import './dist/v-antd.css'

Vue.use(VueRouter)
// Vue.use(vAntd)

import App from './app.vue'
import Home from './routers/home.vue'
import Button from './routers/button.vue'
import Affix from './routers/affix.vue'

var routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'button', path: '/button', component: Button },
    { name: 'affix', path: '/affix', component: Affix }
]

var router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')