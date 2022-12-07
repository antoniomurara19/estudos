function calculo(){
    let vet1 = [1,2,3,4,5,6,7]
    let vet2 = [2,4,6,8,10,12,14]
    let res = []
    let result = document.getElementById("texto")

    for (let i = 0; i < vet1.length && i < vet2.length; i++) {
        res[i] = vet1[i] + vet2[i]

        console.log(res[i])
        result.innerHTML = "A soma dos seus vetores foram foi de :  ["  + res + "]" 
    }
}

function benati(){
    let gay = document.getElementById("gay")
    gay.innerHTML = "O Matheus Benatti é o mais gay de todos !!"
    let tudo = document.getElementById("tudo")
    tudo.style.backgroundColor = "	#6A5ACD"
    let h1 = document.getElementById("h1")
    let h2 = document.getElementById("texto")
    let h3 = document.getElementById("gay")
    h1.style.color = "white"
    h1.style.fontSize = "100px"
    h2.style.color = "white"
    h3.style.fontSize = "30px"
    h3.style.color = "white"
}