<template>
    <div :class="classes" :style="styles">
    cccccccccccccccccccccccccccccc
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'ant-affix'

export default {
    data () {
        return {
            affix: false,
            styles: ''
        }
    },
    props: {
        offsetTop: {
            default: 0,
            type: Number
        },
        offsetBottom: {
            type: Number
        }
    },
    computed: {
        classes () {
            return `${prefixCls}`
        },
        affixType () {
            if (this.offsetBottom !== undefined) {
                return 'bottom'
            }
            return 'top'
        }
    },
    mounted () {
        var self = this
        document.addEventListener('scroll', function () {
            self.scrollHandle()
        })
    },
    methods: {
        getOffset (element) {
            const rect = element.getBoundingClientRect()
            // IE中，默认坐标从(2, 2)开始，与其他浏览器差2px
            // IE为2，其他为0
            const clientTop = document.documentElement.clientTop || document.body.clientTop || 0
            const clientLeft = document.documentElement.clientLeft || document.body.clientTop || 0
            return {
                top: rect.top + clientTop,
                left: rect.left + clientLeft
            }
        },
        scrollHandle () {
            var offset = this.getOffset(this.$el)
            if (this.affixType === 'top') {
                // 实际距离屏幕顶端高度小于设定高度
                console.log(offset.top)
                if (offset.top <= this.offsetTop) {
                    this.affix = true
                    this.styles = `left: ${offset.left}; top: ${this.offsetTop}`
                } else {
                    this.affix = false
                    this.styles = null
                }
            } else if (this.affixType === 'bottom') {

            }
        }
    }
}
</script>