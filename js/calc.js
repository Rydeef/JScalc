let calcInput = document.querySelector('.calc-input-text')
const calcUndo = document.querySelector('.calc-input-undo')
let calcEqually = document.querySelector('.calc-menu-equally')


calcInput.value = '0,00'

function textInput(num){
   
    if (calcInput.value == '0,00' || calcInput.value == '∞'){
        calcInput.value = '' 
        calcInput.value = calcInput.value + num;
    }
    else{
        calcInput.value = calcInput.value + num;
    }
}

function textClear(){ 
   calcInput.value = '0,00'
}

calcEqually.addEventListener('click', function(){
    let calcEval = eval(calcInput.value)
    calcInput.value = calcEval
    
    if(calcEval == Infinity){
        calcInput.value = '∞'
    }
    
    if(calcEval == undefined){
        calcInput.value = '0,00'
    }
    if(calcInput.value == 'NaN'){
        calcInput.value = 'Error, try again'
    }
    if(calcEval == '0'){
        calcInput.value = '0,00'
    }
})

calcUndo.addEventListener('click', function(){
    if(calcInput.value == '0,00'){
        calcInput.value = ''
    }
    else{
        let calcInputArray = calcInput.value.toString().split('')
        let trash = calcInputArray.pop()  
        calcInput.value = calcInputArray.join('')
    }
    
    
})

