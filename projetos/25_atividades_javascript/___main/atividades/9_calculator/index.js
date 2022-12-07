function calculo(){ 
    let num1,num2
    let result1,result2,result3,result4

cor = document.getElementById("cor").value
num1 = Number(document.getElementById("num1").value)
num2 = Number(document.getElementById("num2").value)

switch (cor){
    case "A" || "a" : 
    result1 = num1 + num2 
    console.log(result1)
    soma = document.getElementById("soma")
    soma.innerHTML = "= " + result1
    break;

    case "a" : 
    result1 = num1 + num2 
    console.log(result1)
    soma = document.getElementById("soma")
    soma.innerHTML = "= " + result1
    break;

    case "S" : 
    result2 = num1 - num2
    console.log (result2)
    menos = document.getElementById("menos")
    menos.innerHTML = "= " +  result2
    break;

    case "s" : 
    result2 = num1 - num2
    console.log (result2)
    menos = document.getElementById("menos")
    menos.innerHTML = "= " + result2
    break;

    case "M" :
    result3 = num1 * num2 
    console.log(result3)
    vezes = document.getElementById("vezes")
    vezes.innerHTML = "= " + result3
    break;

    case "m" :
    result3 = num1 * num2 
    console.log(result3)
    vezes = document.getElementById("vezes")
    vezes.innerHTML = "= " + result3
    break;

    case "D" : 
    result4 = num1 / num2 
    console.log(result4)
    divisao = document.getElementById("divisao")
    divisao.innerHTML = "= " + result4
    break;

    case "d" : 
    result4 = num1 / num2 
    console.log(result4)
    divisao = document.getElementById("divisao")
    divisao.innerHTML = "= " + result4
    break;

    default : 
    p = document.getElementById("escrever")
    p.innerHTML = "Você não teclou nenhuma tecla certa ou simplesmente teclou uma errada"
}
}