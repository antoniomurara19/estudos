function calculo(){
    let num1,peca,fim

    num1 = Number(document.getElementById("num1").value)

    if (num1 < 50){
        peca = (num1*35)/100 + num1
    } else if (num1 < 100 && num1 > 50){
        peca = (num1*25)/100 + num1
    } else {
        peca = (num1*15)/100 + num1
    }
     console.log(peca)
     console.log(num1)

    fim = document.getElementById("fim")
    fim.innerHTML = "O valor final da sua peça é = R$" + peca
};