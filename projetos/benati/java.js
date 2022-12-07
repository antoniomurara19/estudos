function calculo(){
    let vet1 = [1,2,3,4,5,6,7]
    let vet2 = [2,4,6,8,10,12,14]
    let res = []
    let result = document.getElementById("texto")
    

    for (let i = 0; i < vet1.length && i < vet2.length; i++) {
        res[i] = vet1[i] + vet2[i]

        console.log(res[i])
        result.innerHTML = "Soma dos vetores :  ["  + res + "]" 
    }

    let tudo = document.getElementById("tudo")
    let h2 = document.getElementById("texto")
    let h4 = document.getElementById("h4")
    let h5 = document.getElementById("h5")
    let h1 = document.getElementById("h1")
    tudo.style.backgroundImage ="url(img/susto.jpg)"
    h1.style.color = "white"
    h1.style.fontSize = "100px"
    h2.style.color = "white"
    h2.style.fontSize = "50px"
    h4.style.color = "white"
    h5.style.color = "white"

}

function benati(){
    let tudo = document.getElementById("tudo")
    let h1 = document.getElementById("h1")
    let h2 = document.getElementById("texto")
    let h3 = document.getElementById("h3")
    let h4 = document.getElementById("h4")
    let h5 = document.getElementById("h5")

    // h3.innerHTML = "O Matheus Benatti é o mais gay de todos !!"
    tudo.style.backgroundImage = "url(img/flor.gif)"
    h1.style.color = "white"
    h1.style.fontSize = "100px"
    h2.style.color = "white"
    h3.style.fontSize = "30px"
    h3.style.color = "white"
    h4.style.fontSize = "30px"
    h4.style.color = "white"
    h5.style.fontSize = "30px"
    h5.style.color = "white"
}

function rayphou(){
    let tudo = document.getElementById("tudo")
    tudo.style.backgroundImage = "url(img/john.gif)"
    let audio = new Audio('img/sapao.mp3')
    audio.play()
}

