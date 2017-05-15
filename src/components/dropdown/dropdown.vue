<template>
    <div :class="classes">
        <div :class="triggerClass"
            ref="trigger">
            <slot></slot>
        </div>
        <slot name="list"></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-dropdown'

import { oneOf } from '../../assets/js/util'
import Bus from '../../assets/js/bus'

export default {
    props: {
        trigger: {
            default: 'click',
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
    mounted () {
        this.bindTriggerEvent()
        this.bindClickOutside()
    },
    methods: {
        toggleVisible (visible) {
            Bus.$emit('toggle-visible', visible)
        },
        bindTriggerEvent () {
            let self = this
            let triggerEl = this.$refs.trigger,
                popperEl = this.$slots.list[0].elm
            if (this.trigger == 'hover') {
                triggerEl.addEventListener('mouseenter', () => this.toggleVisible(true))
                triggerEl.addEventListener('mouseleave', () => this.toggleVisible(false))
                popperEl.addEventListener('mouseenter', () => this.toggleVisible(true))
                popperEl.addEventListener('mouseleave', () => this.toggleVisible(false))
            } else if (this.trigger == 'click') {
                triggerEl.addEventListener('click', (e) => {
                    this.toggleVisible(true)
                    e.stopPropagation()
                })
            }
        },
        bindClickOutside () {
            if (!window.hasBindDropdownClickOutside) {
                window.hasBindDropdownClickOutside = true
                document.addEventListener('click', () => {
                    console.log(this)
                    if (this.trigger == 'click') {
                        this.toggleVisible(false)
                    }
                })
            }
        }
    }
}
</script>