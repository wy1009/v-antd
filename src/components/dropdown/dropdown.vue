<template>
    <div :class="classes">
        <div :class="relClass">
            <slot @hover="toggleVisible(true)"></slot>
        </div>
        <ul class="ant-dropdown-menu">
            <slot v-show="visible"></slot>
        </ul>
    </div>
</template>

<script>
const prefixCls = 'ant-dropdown'

export default {
    data () {
        return {
            visible: false
        }
    },
    computed: {
        classes () {
            return prefixCls
        },
        relClass () {
            return `${prefixCls}-rel`
        }
    },
    methods: {
        toggleVisible (visible) {
            this.visible = visible
        }
    }
}
</script>