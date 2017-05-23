const bodyElm = document.querySelector('body')

function Popper (ref, popper) {
    this.refElm = ref
    this.popperElm = popper
    this.movePopper()
}

// 移动popper并定位
Popper.prototype.movePopper = function () {
    bodyElm.appendChild(this.popperElm)
    const refPosition = this.refElm.getBoundingClientRect()
    console.log(this.refElm.getBoundingClientRect())
    if (this.popperElm.style.position !== 'absolute') {
        this.popperElm.style.position = 'absolute'
    }
    this.popperElm.style.left = `${refPosition.left}px`
    this.popperElm.style.top = `${refPosition.bottom}px`
}

export default Popper