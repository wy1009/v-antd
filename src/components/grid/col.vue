<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-col'

export default {
    props: {
        span: {
            validator (value) {
                return Math.floor(value) == value && value <= 24
            }
        }
    },
    computed: {
        classes () {
            if (this.span !== undefined) {
                return `${prefixCls}-${this.span}`
            }
            return prefixCls
        }
    }
}
</script>
