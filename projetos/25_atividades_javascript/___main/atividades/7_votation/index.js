function calculo(){
    let nome=0.0,idade=0.0,resposta_16=0.0,resposta_70=0.0,resposta_fim=0.0,resposta_child=0.0,resposta_ne=0.0

    nome = document.getElementById("nome").value
    idade = Number(document.getElementById("idade").value)

    if (idade >= 16 && idade < 18){
        resposta_16 = idade 
        resposta_16 = document.getElementById("resposta_16")
        resposta_16.innerHTML = "Caro(a), "+ nome + " seu voto não é obrigatório, devido aos seus " + idade + " anos"
    } else if (idade >= 70){
        resposta_70 = idade
        resposta_70 = document.getElementById("resposta_70")
        resposta_70.innerHTML = "Caro(a), "+ nome + " seu voto não é obrigatório, devido aos seus " + idade + " anos"
    } else if (idade >= 18 && idade < 70){
        resposta_fim = idade
        resposta_fim = document.getElementById("resposta_fim")
        resposta_fim.innerHTML = "Caro(a), " + nome + " seu voto é obrigatório, devido aos seus " + idade + " anos"
    } else if (idade < 16 && idade > 0){
        resposta_child = idade
        resposta_child = document.getElementById("resposta_child")
        resposta_child.innerHTML = "Caro(a), " + nome + " seu voto não é obrigatório, devido aos seus " + idade + " anos!!"
    } else if (idade < 0 ){
        resposta_ne = idade
        resposta_ne = document.getElementById("resposta_ne")
        resposta_ne.innerHTML = "Caro(a), " + nome + " você não existe, devido aos seus " + idade + " anos!!"
    }
}