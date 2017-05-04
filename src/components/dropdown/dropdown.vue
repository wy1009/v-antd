<template>
    <div :class="classes">
        <slot></slot>
        <slot name="list"></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-dropdown'

export default {
    computed: {
        classes () {
            return prefixCls
        },
        menuClasses () {
            return `${prefixCls}-menu`
        }
    }
}
</script>