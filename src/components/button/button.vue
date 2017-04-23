<template>
    <button class="ant-btn" :class="type"><slot></slot></button>
</template>

<script>
import { oneOf } from '../../assets/js/util.js'

const prefixCls = 'ant-btn'

export default {
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['primary', 'dashed', 'danger'])
            }
        }
    },
    computed: {
        classes () {
            return [
                prefixCls,
                {
                    [`${prefixCls}-${this.type}`]: !!this.type
                }
            ]
        }
    }
}
</script>