function calculo(){
num1 = Number(document.getElementById("num1").value)
num2 = Number(document.getElementById("num2").value)
num3 = Number(document.getElementById("num3").value)
num4 = Number(document.getElementById("num4").value)
num5 = Number(document.getElementById("num5").value)
num6 = Number(document.getElementById("num6").value)
num7 = Number(document.getElementById("num7").value)


if (num1 == 0){
    res1 = document.getElementById("1")
    res1.innerHTML = "O seu número não pode ser 0"
}else if (num1 % 2 == 0){
    res1 = document.getElementById("1")
    res1.innerHTML = "Par"
}else if (num1 % 2 == 1){
    res1 = document.getElementById("1")
    res1.innerHTML = "Ímpar"
}else{
    res1 = document.getElementById("1")
    res1.innerHTML = "O número precisa ser do tipo inteiro e positivo."
    
}


if (num2 == 0){
    res2 = document.getElementById("2")
    res2.innerHTML = "O seu número não pode ser 0"
}else if (num2 % 2 == 0){
    res2 = document.getElementById("2")
    res2.innerHTML = "Par"
}else if (num2 % 2 == 1){
    res2 = document.getElementById("2")
    res2.innerHTML = "Ímpar"
}else {
    res2 = document.getElementById("2")
    res2.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}


if (num3 == 0){
    res3 = document.getElementById("3")
    res3.innerHTML = "O seu número não pode ser 0"
}else if (num3 % 2 == 0){
    res3 = document.getElementById("3")
    res3.innerHTML = "Par"
}else if (num3 % 2 == 1){
    res3 = document.getElementById("3")
    res3.innerHTML = "Ímpar"
}else {
    res3 = document.getElementById("3")
    res3.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}



if (num4 == 0){
    res4 = document.getElementById("4")
    res4.innerHTML = "O seu número não pode ser 0"
}else if (num4 % 2 == 0){
    res4 = document.getElementById("4")
    res4.innerHTML = "Par"
}else if (num4 % 2 == 1){
    res4 = document.getElementById("4")
    res4.innerHTML = "Ímpar"
}else {
    res4 = document.getElementById("4")
    res4.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}



if (num5 == 0){
    res5 = document.getElementById("5")
    res5.innerHTML = "O seu número não pode ser 0"
}else if (num5 % 2 == 0){
    res5 = document.getElementById("5")
    res5.innerHTML = "Par"
}else if (num5 % 2 == 1){
    res5 = document.getElementById("5")
    res5.innerHTML = "Ímpar"
}else {
    res5 = document.getElementById("5")
    res5.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}


if (num6 == 0){
    res6 = document.getElementById("6")
    res6.innerHTML = "O seu número não pode ser 0"
}else if (num6 % 2 == 0){
    res6 = document.getElementById("6")
    res6.innerHTML = "Par"
}else if (num6 % 2 == 1){
    res6 = document.getElementById("6")
    res6.innerHTML = "Ímpar"
}else {
    res6 = document.getElementById("6")
    res6.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}


if (num7 == 0){
    res7 = document.getElementById("7")
    res7.innerHTML = "O seu número não pode ser 0"
}else if (num7 % 2 == 0){
    res7 = document.getElementById("7")
    res7.innerHTML = "Par"
}else if (num7 % 2 == 1){
    res7 = document.getElementById("7")
    res7.innerHTML = "Ímpar"
} else {
    res7 = document.getElementById("7")
    res7.innerHTML = "O número precisa ser do tipo inteiro e positivo."
}







};