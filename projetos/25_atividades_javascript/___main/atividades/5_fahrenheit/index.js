function temp_fa(){
let fa,ce
ce = document.getElementById("celsius").value

fa = ce * 1.8 + 32

console.log("A sua temperatura em Celsius é :",ce)
console.log("A sua temperatura em Fahrenheit é :",fa)

resposta = document.getElementById("fa")
resposta.innerHTML = + ce + " graus Celsius, são " + fa + " graus Fahrenheit"
};

function temp_ce(){
let fa,ce
fa = document.getElementById("fahrenheit").value

ce = ( fa - 32 ) / 1.8

resultado = document.getElementById("ce")
resultado.innerHTML = + fa + " graus Celsius, são " + ce + " graus Fahrenheit"
};