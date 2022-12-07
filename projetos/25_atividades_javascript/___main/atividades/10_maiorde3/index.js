function calculo(){
let num1,num2,num3,result_menor,result_maior

num1 = Number(document.getElementById("num1").value)
num2 = Number(document.getElementById("num2").value)
num3 = Number(document.getElementById("num3").value)

if (num1 > num2 && num1 > num3){
    result_maior = document.getElementById("maior")
    result_maior.innerHTML = "Seu número maior é: " + num1
} if (num2 > num1 && num2 > num3){
    result_maior = document.getElementById("maior")
    result_maior.innerHTML = "Seu número maior é: " + num2
} if (num3 > num2 && num3 > num1){
    result_maior = document.getElementById("maior")
    result_maior.innerHTML = "Seu número maior é: " + num3
} if (num1 < num2 && num1 < num3){
    result_menor = document.getElementById("menor")
    result_menor.innerHTML = "Seu número menor é: " + num1
}if (num2 < num1 && num2 < num3){
    result_menor = document.getElementById("menor")
    result_menor.innerHTML = "Seu número menor é: " + num2
}if (num3 < num1 && num3 < num2){
    result_menor = document.getElementById("menor")
    result_menor.innerHTML = "Seu número menor é: " + num3
}






















};