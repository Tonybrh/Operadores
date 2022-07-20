let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let resultado = document.querySelector('.resultado');
function soma() {
    let res = Number(Number(num1.value) + Number(num2.value));
    if (Number(num1.value === num2.value) && Number(res < 10)) {
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são iguais. Sua soma, que é ${res} é menor que 10 e menor que 20`
    } else if(Number(num1.value === num2.value) && Number(res < 20) && Number(res > 10)){
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são iguais. Sua soma, que é ${res} é maior que 10 e menor que 20 `
    } else if(Number(num1.value === num2.value) && Number(res > 20) && Number(res > 10)){
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são iguais. Sua soma, que é ${res} é maior que 10 e maior que 20 `
    } else if(Number(num1.value != num2.value) && Number(res < 10)){
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são diferentes. Sua soma, que é ${res} é menor que 10 e menor que 20`
    } else if(Number(num1.value != num2.value) && Number(res < 20) && Number(res > 10)){
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são diferentes. Sua soma, que é ${res} é maior que 10 e menor que 20 `
    } else if(Number(num1.value != num2.value) && Number(res > 20) && Number(res > 10)){
        resultado.innerHTML = `Os números ${num1.value} e ${num2.value} são diferentes. Sua soma, que é ${res} é maior que 10 e maior que 20 `
    }
    if(num1.value === ''|| num2.value === ''){
        window.alert("[ERRO] Digite os números")
        resultado.innerHTML = "Digite dois números"
    }
}