<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-row'

export default {
    props: {
        gutter: {
            type: Number,
            default: 0
        }
    },
    computed: {
        classes () {
            return prefixCls
        },
        styles () {
            return {
                marginLeft: this.gutter / -2 + 'px',
                marginRight: this.gutter / -2 + 'px'
            }
        }
    },
    mounted () {
        if (!this.gutter) {
            return
        }
        this.updateGutter(this.gutter)
    },
    watch: {
        gutter (val) {
            this.updateGutter(val)
        }
    },
    methods: {
        updateGutter (val) {
            for (let item of this.$children) {
                item.gutter = val
            }
        }
    }
}
</script>