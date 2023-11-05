function el(x, y, z) {
    let newel = document.createElement(x)
    if(y) {
        y.appendChild(newel)
    }
    if(z) {
        newel.setAttribute(z[0], z[1])
    }
    return newel
}
function css(x, y) {
    for(let i in y) {
        x.style[i] = y[i]
    }
}

export {css}