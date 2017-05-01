<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-breadcrumb'

export default {
    computed: {
        classes () {
            return `${prefixCls}`
        }
    }
}
</script>