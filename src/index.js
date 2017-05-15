import VButton from './components/button/index.js'
import Affix from './components/affix/index.js'
import Breadcrumb from './components/breadcrumb/index.js'
import BackTop from './components/back-top/index.js'
import Dropdown from './components/dropdown/index.js'
import Grid from './components/grid/index.js'

const vAntd = {
    VButton,
    Affix,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    BackTop,
    Dropdown,
    DropdownMenu: Dropdown.Menu,
    DropdownMenuItem: Dropdown.MenuItem,
    Row: Grid.Row,
    VCol: Grid.Col
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