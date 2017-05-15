// 引入mixin后，需要在this.$el上添加v-show=currentVisible，引入位置为popper组件，popper部分应为一个单独组件
// 操纵状态：Bus.$emit('toggle-visible', Boolean)

const $body = document.querySelector('body')

import Bus from './bus'

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentVisible: this.visible
        }
    },
    mounted () {
        this.movePopper()
        this.listenToggleVisible()
        this.bindClickOutside()
    },
    methods: {
        // 将popper移到最外层
        movePopper () {
            $body.appendChild(this.$el)
            const parentPosition = this.$parent.$el.getBoundingClientRect()
            if (this.$el.style.position !== 'absolute') {
                this.$el.style.position = 'absolute'
            }
            this.$el.style.left = `${parentPosition.top}px`
            this.$el.style.top = `${parentPosition.bottom}px`
        },
        listenToggleVisible () {
            Bus.$on('toggle-visible', visible => {
                this.currentVisible = visible
            })
        },
        bindClickOutside () {
            if (!window.hasBindDropdownClickOutside) {
                window.hasBindDropdownClickOutside = true
                document.addEventListener('click', () => {
                    this.currentVisible = false
                })
            }
        }
    }
}