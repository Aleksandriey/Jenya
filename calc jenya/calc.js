const resultElement = document.getElementById('result')
const fnum = document.getElementById('fnum')
const snum = document.getElementById('snum')
const submitBtn = document.getElementById('math')
const plusBtn = document.getElementById('buttonplus')
const minusBtn = document.getElementById('buttonminus')
const umnozBtn = document.getElementById('buttonx')
const delitBtn = document.getElementById('buttony')


let action = '+'


plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
umnozBtn.onclick = function() {
    action = '*'
}
delitBtn.onclick = function() {
    action = '/'
}



function printResult(result) {
    if(result < 0) {
        resultElement.style.color = 'red'
       } else {
           resultElement.style.color = 'green'
       }
}
submitBtn.onclick = function () {
if(action == '+') {
        const sum = Number(fnum.value) + Number(snum.value)
        printResult(sum)
        resultElement.textContent = sum
}
    else if(action == '-') {
        const sum = Number(fnum.value) - Number(snum.value)
        printResult(sum)
        resultElement.textContent = sum
    }
    else if(action == '*') {
        const sum = Number(fnum.value) * Number(snum.value)
        printResult(sum)
        resultElement.textContent = sum
    }   
    else if(action == '/') {
        const sum = Number(fnum.value) / Number(snum.value)
        printResult(sum)
        resultElement.textContent = sum
    }
}