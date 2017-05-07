<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-row'

export default {
    computed: {
        classes () {
            return prefixCls
        }
    }
}
</script>