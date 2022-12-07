function calculo(){
let gasolina = 4.91
let alcool = 3.19
let valor_a
let valor_g


combustivel = document.getElementById("combustivel").value
litros = Number(document.getElementById("litros").value)
num1.innerHTML = ""
num2.innerHTML = ""


if (combustivel == "A" && litros <= 20){
    valor_a = (litros * alcool) - ((litros * alcool) * (2/100))
    num1 = document.getElementById("num1")
    num1.innerHTML = "Ficou R$" + valor_a.toFixed(2)
}else if (combustivel == "A" && litros > 20){
    valor_a = (litros * alcool) - ((litros * alcool) * (4/100))
    num1 = document.getElementById("num1")
    num1.innerHTML = "Ficou R$" + valor_a.toFixed(2)
}else if (combustivel == "G" && litros <= 20){
    valor_g = (litros * gasolina) - ((litros * gasolina) * (3/100))
    num2 = document.getElementById("num2")
    num2.innerHTML = "Ficou R$" + valor_g.toFixed(2)
}else if (combustivel == "G" && litros > 20){
    valor_g = (litros * gasolina) - ((litros * gasolina) * (5/100))
    num2 = document.getElementById("num2")
    num2.innerHTML = "Ficou R$" + valor_g.toFixed(2)
}
}