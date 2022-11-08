let numberOne = Number(prompt("Digite um numero"))
let numberTwo = Number(prompt("Agora, outro"))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let divi = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`A soma é${ sum}`)
alert(`A subtração é${ sub}`)
alert(`A multiplicação é ${ multi}`)
alert(`A divisão é ${divi}`)
alert(`E o resto da divisão é ${ rest}`)