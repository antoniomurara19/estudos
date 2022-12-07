function calculo(){
let fim
perdeu = Number(document.getElementById("gasto").value)

if(document.getElementById("pagamento").value == "dinheiro1") {
    fim = perdeu - (perdeu*5/100)
    fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim

}else if (document.getElementById("pagamento").value == "dinheiro2"){   fim = perdeu + (perdeu*5/100)
fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim

}else if (document.getElementById("pagamento").value == "dinheiro3"){   fim = perdeu + (perdeu*9/100)
fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim
}


if(document.getElementById("pagamento").value == "cartao1") {
    fim = perdeu - (perdeu*2/100)
    fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim

}else if (document.getElementById("pagamento").value == "cartao2"){   fim = perdeu + (perdeu*3/100)
fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim

}else if (document.getElementById("pagamento").value == "cartao3"){   fim = perdeu + (perdeu*7/100)
fim = document.getElementById("resultado").innerHTML = "O preço final da sua compra ficou por R$" + fim
}}