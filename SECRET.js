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

// attach this file to an html file to see output
// this is not completed

let mainObj = localStorage.getItem('studts')
if(!mainObj) { mainObj = [] }
else {
    mainObj = JSON.parse(mainObj)
}

const classes = [
    ['6A', '6B', '6C', '6D', '6E', '6F', '6G'],
    ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],    
    ['8A', '8B', '8C', '8D', '8E', '8F', '8G'],    
]

class Person {
 constructor(x,y) {
    this.name = x
    this.class = y
 }
}

let classWithKids = []
classes.forEach((x, y) => {
    classWithKids.push([])
    x.forEach((a,b) => {
        classWithKids[y].push({className: a, students: []})
    })
})

function find(s) {
    classWithKids.forEach(x => {
        x.forEach(y => {
            if(y.className == s) {
                return y
            }
        })
    })
}

const BODY = document.querySelector('body')

let formel = [
    el('h2', BODY, ['class', 'headfrm']),
    el('input', BODY, ['id', 'inputnme']),
    el('select', BODY, ['id', 'optionss']),
    el('button', BODY, ['class', 'submitted']),
    el('button', BODY, ['', ''])
]
formel[4].textContent = 'clear'
formel[4].onclick = () => {
    localStorage.clear()
}
classes.forEach(x => {
    x.forEach(y => {
      el('option', formel[2], ['value', y]).textContent = y
    })
})

function addStuff() {
    let valname = formel[1].value;
    let classnammee = formel[2].value
    let newarr = [valname, classnammee]
    mainObj.push(newarr)
    console.log(mainObj)
    localStorage.setItem('studts', JSON.stringify(mainObj))
}

formel[1].setAttribute('placeholder', 'enter a name')
formel[0].textContent = 'enter a name and select the class'
formel[3].textContent = 'enter'
formel[3].onclick = () => {
    addStuff()
}
window.addEventListener('keypress', (e) => {
    if(e.key == 'n') {
        addStuff()
    }
})
console.log(mainObj)