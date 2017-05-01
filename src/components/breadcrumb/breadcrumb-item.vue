<template>
    <span :class="classes">
        <span :class="linkClasses">
            <a v-if="href" :href="href"><slot></slot></a>
        </span>
        <span :class="separatorClasses" v-html="separator"></span>
    </span>
</template>

<script>
const prefixCls = 'ant-breadcrumb-item'

export default {
    props: {
        href: {
            type: String
        },
        separator: {
            type: String,
            default: '/'
        }
    },
    computed: {
        classes () {
            return `${prefixCls}`
        },
        linkClasses () {
            return `${prefixCls}-link`
        },
        separatorClasses () {
            return `${prefixCls}-separator`
        }
    }
}
</script>