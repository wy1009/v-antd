<template>
    <div :class="classes">
        <div :class="refClass"
            ref="ref">
            <slot></slot>
        </div>
        <div :class="popperClass"
            ref="popper"
            v-show="currentVisible">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
const prefixCls = 'ant-dropdown'

import { oneOf } from '../../assets/js/util'
import Popper from '../../assets/js/popper.js'

export default {
    props: {
        trigger: {
            default: 'click',
            validator (val) {
                return oneOf(val, ['click', 'hover'])
            }
        }
    },
    data () {
        return {
            currentVisible: false
        }
    },
    computed: {
        classes () {
            return prefixCls
        },
        refClass () {
            return `${prefixCls}-ref`
        },
        popperClass () {
            return `${prefixCls}-popper`
        }
    },
    mounted () {
        this.bindRefEvent()
        new Popper(this.$refs.ref, this.$refs.popper)
    },
    methods: {
        bindRefEvent () {
            let self = this
            let refEl = this.$refs.ref,
                popperEl = this.$slots.list[0].elm
            if (this.trigger == 'hover') {
                refEl.addEventListener('mouseenter', () => this.currentVisible = true)
                refEl.addEventListener('mouseleave', () => this.currentVisible = false)
                popperEl.addEventListener('mouseenter', () => this.currentVisible = true)
                popperEl.addEventListener('mouseleave', () => this.currentVisible = false)
            } else if (this.trigger == 'click') {
                refEl.addEventListener('click', (e) => {
                    this.currentVisible = true
                    e.stopPropagation()
                })
            }
        }
    }
}
</script>