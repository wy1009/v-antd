const bodyElm = document.querySelector('body')

function Popper (ref, popper, options) {
    this.refElm = ref
    this.popperElm = popper
    // 进行DOM操作后，如果不将getBoundingClientRect操作移入下一个队列，取值会出错
    this.options = options
    if (this.options.visible !== true) {
        this.popperElm.style.display = 'none'
    }
    this.movePopper()
}

// 移动popper并定位
Popper.prototype.movePopper = function () {
    bodyElm.appendChild(this.popperElm)
    if (this.popperElm.style.position !== 'absolute') {
        this.popperElm.style.position = 'absolute'
    }
    setTimeout(() => {
        const refPosition = this.refElm.getBoundingClientRect()
        this.popperElm.style.left = `${refPosition.left}px`
        this.popperElm.style.top = `${refPosition.bottom}px`
    }, 0)
}

Popper.prototype.updateVisible = function (val) {
    if (val) {
        this.popperElm.style.display = 'block'
    } else {
        this.popperElm.style.display = 'none'
    }
}

export default Popper