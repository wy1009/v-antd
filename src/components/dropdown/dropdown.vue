<template>
    <div :class="classes">
        <div :class="refClass"
            ref="ref">
            <slot></slot>
        </div>
        <div :class="popperClass"
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
        },
        visible: {
            default: false,
            type: Boolean
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
    data () {
        return {
            currentVisible: this.visible,
            popper: {}
        }
    },
    watch: {
        currentVisible (val) {
            this.popper.updateVisible(val)
            this.$emit('on-visible-change')
        }
    },
    mounted () {
        this.popper = new Popper(this.$refs.ref, this.$refs.popper, {
            visible: this.visible
        })
        this.bindRefEvent()
        this.clickOutside()
    },
    methods: {
        bindRefEvent () {
            if (this.trigger == 'hover') {
                this.$refs.ref.addEventListener('mouseenter', () => this.currentVisible = true)
                this.$refs.ref.addEventListener('mouseleave', () => this.currentVisible = false)
                this.$refs.popper.addEventListener('mouseenter', () => this.currentVisible = true)
                this.$refs.popper.addEventListener('mouseleave', () => this.currentVisible = false)
            } else if (this.trigger == 'click') {
                this.$refs.ref.addEventListener('click', (e) => {
                    this.currentVisible = true
                    e.stopPropagation()
                })
            }
        },
        clickOutside () {
            document.addEventListener('click', () => {
                this.currentVisible = false
            })
        }
    },
    beforeDestroy () {
        this.popper.updateVisible(false)
    }
}
</script>