function calculo(){
ladoA = Number(document.getElementById("lado1").value)
ladoB = Number(document.getElementById("lado2").value)
ladoC = Number(document.getElementById("lado3").value)
result = document.getElementById("resultado")

if (ladoA == ladoB && ladoB == ladoC){
    result.innerHTML = "Seu triâgulo é equilátero"
} else if (ladoA == ladoB){
    result.innerHTML = "Seu triâgulo é isósceles"
} else if (ladoB == ladoC){
    result.innerHTML = "Seu triâgulo é isósceles"
} else if (ladoA == ladoC){
    result.innerHTML = "Seu triâgulo é isósceles"
} else{
    result.innerHTML = "Seu triâgulo é escaleno"
}}