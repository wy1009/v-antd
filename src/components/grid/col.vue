<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-col'

export default {
    props: {
        span: [Number, String],
        offset: [Number, String]
    },
    data () {
        return {
            gutter: 0
        }
    },
    computed: {
        classes () {
            return [prefixCls, {
                    [`${prefixCls}-${this.span}`]: this.span !== undefined,
                    [`${prefixCls}-offset-${this.offset}`]: this.offset
                }]
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
