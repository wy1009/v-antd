import VButton from './components/button/index.js'
import Affix from './components/affix/index.js'
import Breadcrumb from './components/breadcrumb/index.js'
import BackTop from './components/back-top/index.js'

const vAntd = {
    VButton,
    Affix,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    BackTop
}

const install = function (Vue) {
    console.log('installed')
    Object.keys(vAntd).forEach((key) => {
        Vue.component(key, vAntd[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    console.log('auto installed')
    install(window.Vue)
}

export default Object.assign(vAntd, { install })