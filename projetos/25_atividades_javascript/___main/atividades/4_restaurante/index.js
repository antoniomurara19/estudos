function calculo(){
    let p1,p2,p3,p4,p5,p6,p7,receita3h,receita22dias,pesopp,quinze,hora,tres,dias,peso_dia,peso_mes,peso_15min
    p1 = Number(document.getElementById("p1").value)
    p2 = Number(document.getElementById("p2").value)
    p3 = Number(document.getElementById("p3").value)
    p4 = Number(document.getElementById("p4").value)
    p5 = Number(document.getElementById("p5").value)
    p6 = Number(document.getElementById("p6").value)
    p7 = Number(document.getElementById("p7").value)

    pr1 = p1 * 14.95
    pr2 = p2 * 14.95
    pr3 = p3 * 14.95
    pr4 = p4 * 14.95
    pr5 = p5 * 14.95
    pr6 = p6 * 14.95
    pr7 = p7 * 14.95
    quinze = pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7
    hora = quinze * 4
    tres = hora * 3
    dias = tres * 22
    peso_15min = p1 + p2 + p3 + p4 + p5 + p6 + p7
    peso_dia = peso_15min * 4
    peso_mes = peso_dia * 22

    console.log("Sua receita estimada durante 15min é: ",quinze,"reais")
    console.log("Sua receita estimada durante uma hora é: ",hora,"reais")
    console.log("Sua receita estimada durante 3 horas é: ",tres,"reais")
    console.log("Sua receita estimada durante 22 dias é: ",dias,"reais")
    console.log("O peso total vendido em 15 minutos é: ",peso_15min,"kg")
    console.log("O peso total vendido no dia é: ",peso_dia,"kg")
    console.log("O peso total vendido no mês é: ",peso_mes,"kg")


    receita3h = document.getElementById("tres")
    receita3h.innerHTML = "A sua receita estimada para 3h de trabalho é: "+ tres + " reais"

    receita22dias = document.getElementById("dias")
    receita22dias.innerHTML = "A sua receita estimada para 22 dias de trabalho é: "+ dias + " reais"
    
    pesopp = document.getElementById("peso_mes")
    pesopp.innerHTML = "O peso total de comida vendido no mês é: "+ peso_mes + " kg"
};