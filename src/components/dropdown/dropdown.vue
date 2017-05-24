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
    mounted () {
        new Popper(this.$refs.ref, this.$refs.popper, {
            trigger: this.trigger,
            visible: this.visible
        })
    }
}
</script>