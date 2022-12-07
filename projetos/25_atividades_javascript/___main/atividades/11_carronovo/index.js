function calculo(){
let custo_fabrica,carro,imposto,distru,fim

custo_fabrica = Number(document.getElementById("fabrica").value)
distru = Number(document.getElementById("distru").value)

imposto = (custo_fabrica * 15)/100
carro =  custo_fabrica + imposto + distru

console.log(custo_fabrica)
console.log (distru)
console.log (imposto)
console.log (carro)

fim = document.getElementById("resultado")
fim.innerHTML = "O preço do consumidor final é = " +  carro + " reais"
};