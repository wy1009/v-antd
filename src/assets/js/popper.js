const bodyElm = document.querySelector('body')

function Popper (ref, popper, options) {
    this.refElm = ref
    this.popperElm = popper
    // 记得写一个混合对象的函数，做一个初始化配置
    this.options = options
    // 根据visible配置显示或隐藏popper
    if (this.options.visible !== true) {
        this.popperElm.style.display = 'none'
    }
    // 进行DOM操作后，如果不将getBoundingClientRect操作移入下一个队列，取值会出错
    setTimeout(() => {
        this.movePopper()
        this.bindRefEvent()
        this.clickOutside()
    }, 0)
}

// 移动popper并定位
Popper.prototype.movePopper = function () {
    const refPosition = this.refElm.getBoundingClientRect()
    bodyElm.appendChild(this.popperElm)
    if (this.popperElm.style.position !== 'absolute') {
        this.popperElm.style.position = 'absolute'
    }
    this.popperElm.style.left = `${refPosition.left}px`
    this.popperElm.style.top = `${refPosition.bottom}px`
}

Popper.prototype.bindRefEvent = function () {
    if (this.options.trigger == 'hover') {
        this.refElm.addEventListener('mouseenter', () => this.popperElm.style.display = 'block')
        this.refElm.addEventListener('mouseleave', () => this.popperElm.style.display = 'none')
        this.popperElm.addEventListener('mouseenter', () => this.popperElm.style.display = 'block')
        this.popperElm.addEventListener('mouseleave', () => this.popperElm.style.display = 'none')
    } else if (this.options.trigger == 'click') {
        this.refElm.addEventListener('click', (e) => {
            this.popperElm.style.display = 'block'
            e.stopPropagation()
        })
    }
}

Popper.prototype.clickOutside = function () {
    document.addEventListener('click', () => {
        this.popperElm.style.display = 'none'
    })
}

export default Popper