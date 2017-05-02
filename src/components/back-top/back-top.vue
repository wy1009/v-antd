<template>
    <div :class="classes" @click="back" v-show="backTop">
        <slot>
            <div :class="contentClasses">
                <i class="anticon icon-totop" :class="iconClass"></i>
            </div>
        </slot>
    </div>
</template>

<script>
const prefixCls = 'ant-back-top'

export default {
    props: {
        visibilityHeight: {
            type: Number
        }
    },
    data () {
        return {
            backTop: false
        }
    },
    computed: {
        classes () {
            return prefixCls
        },
        contentClasses () {
            return `${prefixCls}-content`
        },
        iconClass () {
            return `${prefixCls}-icon`
        }
    },
    mounted () {
        document.addEventListener('scroll', this.scrollHandler)
    },
    methods: {
        scrollHandler () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            if (this.visibilityHeight) {
                if (scrollTop > this.visibilityHeight) {
                    this.backTop || (this.backTop = true)
                } else {
                    this.backTop && (this.backTop = false)
                }
            } else {
                this.backTop || (this.backTop = true)
            }
            
        },
        back () {
            window.scroll(0, 0)
            this.$emit('on-click')
        }
    }
}
</script>