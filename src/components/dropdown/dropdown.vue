<template>
    <div :class="classes">
        <div :class="triggerClass"
            ref="trigger">
            <slot></slot>
        </div>
        <slot name="list"
            ref="popper"></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-dropdown'

import { oneOf } from '../../assets/js/util'
import Bus from '../../assets/js/bus'

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
        }
    },
    methods: {
        toggleVisible (visible) {
            Bus.$emit('toggle-visible', visible)
        },
        bindClickOutside () {
            let self = this
            let triggerEl = this.$refs.trigger,
                popperEl = this.$refs.popper
            if (this.trigger == 'hover') {
                
            } else if (this.trigger == 'click') {

            }
            if (!window.hasBindDropdownClickOutside) {
                window.hasBindDropdownClickOutside = true
                document.addEventListener('click', function () {
                    self.currentVisible = false
                })
            }
        },
    }
}
</script>