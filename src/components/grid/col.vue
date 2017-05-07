<template>
    <div :class="classes" :style="styles">
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
    data () {
        return {
            gutter: 0
        }
    },
    computed: {
        classes () {
            if (this.span !== undefined) {
                return [prefixCls, `${prefixCls}-${this.span}`]
            }
            return prefixCls
        },
        styles () {
            return {
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2 + 'px'
            }
        }
    }
}
</script>
