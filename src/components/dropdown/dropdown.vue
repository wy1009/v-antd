<template>
    <div :class="classes">
        <div :class="triggerClass"
            ref="trigger">
            <slot></slot>
        </div>
        <div :class="listClass"
            ref="popper">
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
            default: 'hover',
            validator (val) {
                return oneOf(val, ['click', 'hover'])
            }
        }
    },
    computed: {
        classes () {
            return prefixCls
        },
        triggerClass () {
            return `${prefixCls}-trigger`
        },
        listClass () {
            return `${prefixCls}-list`
        }
    },
    mounted () {
        // this.bindTriggerEvent()
        new Popper(this.$refs.trigger, this.$refs.popper)
    },
    methods: {
        toggleVisible (visible) {
            Bus.$emit('toggle-visible', visible)
        },
        // bindTriggerEvent () {
        //     let self = this
        //     let triggerEl = this.$refs.trigger,
        //         popperEl = this.$slots.list[0].elm
        //     if (this.trigger == 'hover') {
        //         triggerEl.addEventListener('mouseenter', () => this.toggleVisible(true))
        //         triggerEl.addEventListener('mouseleave', () => this.toggleVisible(false))
        //         popperEl.addEventListener('mouseenter', () => this.toggleVisible(true))
        //         popperEl.addEventListener('mouseleave', () => this.toggleVisible(false))
        //     } else if (this.trigger == 'click') {
        //         triggerEl.addEventListener('click', (e) => {
        //             this.toggleVisible(true)
        //             e.stopPropagation()
        //         })
        //     }
        // }
    }
}
</script>