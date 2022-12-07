function calculo(){
let valor,salario,fixo=1800

valor = Number(document.getElementById("vendas").value)

if (valor < 10000){
    salario = (valor*3)/100 + fixo
}else if (valor > 10000 && valor < 30000){
    salario = (valor*5)/100 + fixo 
}else {
    salario = (valor*8)/100 + fixo
}

console.log(valor)
console.log(salario)
console.log(fixo)

finn = document.getElementById("seu_salario")
finn.innerHTML = "Seu salário final é R$" + salario


};