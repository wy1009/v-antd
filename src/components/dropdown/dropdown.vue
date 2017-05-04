<template>
    <div :class="classes">
        <slot></slot>
        <ul :class="menuClasses">
            <slot name="list"></slot>
        </ul>
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