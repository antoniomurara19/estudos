function calculo(){
num1 = Number(document.getElementById("num1").value)

if (num1 % 5 == 0 && num1 % 3 == 0){
res = document.getElementById("res")
res.innerHTML = "Parabéns?!!! seu número " + num1 + " é divisível por 5 e 3 !!" 
}else if (num1 % 5 == 0){
    res = document.getElementById("res")
    res.innerHTML = "Parabéns?!!! seu número " + num1 + " é divisível somente por 5 !!" 
}else if (num1 % 3 == 0){
    res = document.getElementById("res")
    res.innerHTML = "Parabéns?!!! seu número " + num1 + " é divisível somente por 3 !!" 
}else {
    res = document.getElementById("res")
    res.innerHTML = "Meu caro amigo, seu número " + num1 + " não é divisível por 5 nem por 3 !!" 
}





};