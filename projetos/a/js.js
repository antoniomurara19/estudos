function onion(){
    var v1 = [3,7,9,11,16,19,22,26]
    let soma = 0
    for (let i= 0; i < v1.length; i++) {
        soma += v1[i]
        
    }
    document.getElementById("antonio").innerHTML = soma
}

function ant(){
    let tudo = document.getElementById("tudo")
    tudo.style.backgroundImage = "url(eu.jpeg)"
}

