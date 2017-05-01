<template>
    <div>
        <div :class="classes" :style="styles">
            <slot></slot>
        </div>
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
            return {
                [`${prefixCls}`]: this.affix
            }
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
                left: rect.left + clientLeft,
                bottom: rect.bottom - clientTop,
                height: rect.height
            }
        },
        getClientHeight () {
            return document.documentElement.clientHeight || document.body.clientHeight
        },
        scrollHandle () {
            var offset = this.getOffset(this.$el)
            if (this.affixType === 'top') {
                // 元素距离屏幕顶端高度小于设定高度
                if (offset.top <= this.offsetTop) {
                    if (!this.affix) {
                        this.affix = true
                        this.styles = `left: ${offset.left}px; top: ${this.offsetTop}px;`
                    }
                } else {
                    if (this.affix) {
                        this.affix = false
                        this.styles = null
                    }
                }
            } else if (this.affixType === 'bottom') {
                // 元素底部低于屏幕，即元素底部距离屏幕顶部大于屏幕高度；如有设定值，则为元素底部距离屏幕顶部加上设定值大于屏幕高度
                if (offset.bottom + this.offsetBottom >= this.getClientHeight()) {
                    if (!this.affix) {
                        this.affix = true
                        this.styles = `left: ${offset.left}px; bottom: ${this.offsetBottom}px;`
                    }
                } else {
                    if (this.affix) {
                        this.affix = false
                        this.styles = null
                    }
                }
            }
        }
    }
}
</script>