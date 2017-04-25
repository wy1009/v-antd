import VButton from './components/button/index.js'
import Affix from './components/Affix/index.js'

const vAntd = {
    VButton: VButton,
    Affix: Affix
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