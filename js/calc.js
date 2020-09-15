let calcInput = document.querySelector('.calc-input')
let backSpace = document.querySelector('.calc-menu-action-backspace')

function textInput(num){
    calcInput.value = calcInput.value + num
}  
function textClear() {
    calcInput.value = ''
}
function equally() {
    let exp = calcInput.value
    if(exp) {
        calcInput.value = eval(exp)
    }
    
}

calcInput.addEventListener('keypress', function equallyEnter(e) {
    if (e.keyCode == 13) {
        calcInput.value = eval(calcInput.value)
        return false
    }
    return true
})

calcInput.addEventListener('keyup', function() {
    this.value = this.value.replace(/[^\d.+-/* ]/g, '')
})

