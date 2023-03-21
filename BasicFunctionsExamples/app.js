import { getCookie, setCookie, eraseCookie } from "./helpers.js"
// window.onload = (() => {
//     alert('load')
// })

// DOM methods
let container = document.getElementById('container')
console.log(container)

let paragraphs = container.getElementsByClassName('paragraph')
console.warn(paragraphs)

// NODE methods
let testArray = ['One', 'Two', 'Three']
let debug = container.getElementsByTagName('pre')[0]
debug.innerHTML = testArray
console.log(debug)

let newDiv = document.createElement('div', {is: "test"})
let newTextNode = document.createTextNode('Hi there')
container.appendChild(newDiv)
container.insertBefore(newTextNode, document.getElementById('first'))

// window.addEventListener('load', () => {
//     alert('etrexe')
// })

container.appendChild(document.createElement('button'))

let button = container.getElementsByTagName('button')[0]
button.setAttribute('content', 'Click me')
button.textContent = 'Click me'

// Event methods
let counter = 0

button.addEventListener('click', () => {
    let debug = document.getElementById('debug')
    let classHandler = () => {
        button.classList.remove('class_1')
        button.classList.remove('class_2')
        button.classList.remove('class_3')
        button.classList.remove('class_4')
    }
    setCookie('ppkcookie','testcookie',7);
    setTimeout(() => {
        console.log("this is the first message");
      }, 5000);
      setTimeout(() => {
        console.log("this is the second message");
      }, 3000);
      setTimeout(() => {
        console.log("this is the third message");
      }, 1000);
      

    setTimeout(() => {
        button.classList.add('javascript_class')
        counter++
        button.innerHTML = counter
    
        switch (counter % 4) {
            case 1:
                classHandler()
                button.classList.add('class_1')
                break
            case 2:
                classHandler()
                button.classList.add('class_2')
                break
            case 3:
                classHandler()
                button.classList.add('class_3')
                break
            case 0:
                classHandler()
                button.classList.add('class_4')
                break
        }

    }, 1000)
    

})

button.addEventListener('mouseover', () => {
    button.classList.add('class_hover')
})

button.addEventListener('mouseout', () => {
    button.classList.remove('class_hover')
})

let formaela = document.getElementById('formaela')

formaela.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = document.getElementById('var').value
    sessionStorage.setItem('form-data', value)
    
    location.href = './form_submit.html'
})

let form = document.getElementById('formaela1')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var x = getCookie('ppkcookie');
    let input = document.getElementById('var1')
    let debug = document.getElementById('debug')
    let value = input.value
    debug.innerHTML = x
    input.value = ""
})

form.addEventListener("focus", () => {
    console.log('tora entaxi;')
}, true)