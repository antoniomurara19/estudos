

function calculo(){
   let num1 = Number(document.getElementById("num1").value)
   let num2 = Number(document.getElementById("num2").value)
   let op = document.getElementById("operacao").value
   let resultado = document.getElementById("resultado")

 if (op == "+") {
    res = num1 + num2 
    resultado.innerHTML = "A sua adição ficou como " + res + " !!"
    console.log(res)
 } else if(op == "-"){
    res = num1 - num2 
    resultado.innerHTML = "A sua subtração ficou como " + res + " !!"
    console.log(res)
 }else if(op == "/"){
    res = num1 / num2 
    resultado.innerHTML = "A sua divisão ficou como " + res + " !!"
    console.log(res)
 }else if(op == "*"){
    res = num1 * num2 
    resultado.innerHTML = "A sua multiplicação ficou como " + res + " !!"
    console.log(res)
 }
}