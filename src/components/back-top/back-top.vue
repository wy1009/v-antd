<template>
    <div :class="classes"></div>
</template>

<script>
const prefixCls = 'ant-back-top'

export default {
    computed: {
        classes () {
            return prefixCls
        }
    }
}
</script>