import Vue from 'vue'
import VueRouter from 'vue-router'
import vAntd from './dist/v-antd.js'
import './dist/v-antd.css'

Vue.use(VueRouter)
Vue.use(vAntd)

import App from './app.vue'
import Home from './routers/home.vue'
import Button from './routers/button.vue'
import Affix from './routers/affix.vue'
import Breadcrumb from './routers/breadcrumb.vue'
import BackTop from './routers/back-top.vue'
import Dropdown from './routers/dropdown.vue'

var routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'button', path: '/button', component: Button },
    { name: 'affix', path: '/affix', component: Affix },
    { name: 'breadcrumb', path: '/breadcrumb', component: Breadcrumb },
    { name: 'backTop', path: '/backtop', component: BackTop },
    { name: 'dropdown', path: '/dropdown', component: Dropdown }
]

var router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')