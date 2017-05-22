const bodyElm = document.querySelector('body')

function Popper (ref, popper) {
    this.refElm = ref
    this.popperElm = popper
}

// 移动popper并定位
Popper.prototype.movePopper = function () {
    bodyElm.appendChild(this.popperElm)
    const parentPosition = this.refElm.getBoundingClientRect()
    if (this.refElm.style.position !== 'absolute') {
        this.refElm.style.position = 'absolute'
    }
    this.refElm.style.left = `${parentPosition.top}px`
    this.refElm.style.top = `${parentPosition.bottom}px`
}

export default Popper