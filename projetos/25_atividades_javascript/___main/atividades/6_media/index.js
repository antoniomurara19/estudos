function calculo(){
let num1,num2,num3,num4,num5,num6,num7,cont_maior=0.0,cont_menor=0.0,media_maior=0.0,media_menor=0.0,resposta1,resposta2

num1 = Number(document.getElementById("num1").value)
num2 = Number(document.getElementById("num2").value)
num3 = Number(document.getElementById("num3").value)
num4 = Number(document.getElementById("num4").value)
num5 = Number(document.getElementById("num5").value)
num6 = Number(document.getElementById("num6").value)
num7 = Number(document.getElementById("num7").value)

if (num1 >= 6 && num1 < 10 ){
    cont_maior = cont_maior + 1
    media_maior = media_maior + num1 
}else if (num1 > 10 ){
    console.log ("O seu primeiro número é inválido")
}else if (num1 < 0 ){
    console.log("O seu primeiro número é inválido")
}else if (num1 < 6 && num1 > 0){
    cont_menor = cont_menor + 1
    media_menor = media_menor + num1 }


    if (num2 >= 6 && num2 < 10 ){
        cont_maior = cont_maior + 1
        media_maior = media_maior + num2 
    }else if (num2 > 10 ){
        console.log ("O seu primeiro número é inválido")
    }else if (num2 < 0 ){
        console.log("O seu primeiro número é inválido")
    }else if (num2 < 6 && num2 > 0){
        cont_menor = cont_menor + 1
        media_menor = media_menor + num2 }


if (num3 >= 6 && num3 < 10 ){
    cont_maior = cont_maior + 1
    media_maior = media_maior + num3 
}else if (num3 > 10 ){
    console.log ("O seu segundo número é inválido")
}else if (num3 < 0 ){
    console.log("O seu segundo número é inválido")
}else if (num3 < 6 && num3 > 0){
    cont_menor = cont_menor + 1
    media_menor = media_menor + num3 }

    if (num3 >= 6 && num3 < 10 ){
        cont_maior = cont_maior + 1
        media_maior = media_maior + num3 
    }else if (num3 > 10 ){
        console.log ("O seu terceiro número é inválido")
    }else if (num3 < 0 ){
        console.log("O seu terceiro número é inválido")
    }else if (num3 < 6 && num3 > 0){
        cont_menor = cont_menor + 1
        media_menor = media_menor + num3 }


        if (num4 >= 6 && num4 < 10 ){
            cont_maior = cont_maior + 1
            media_maior = media_maior + num4 
        }else if (num4 > 10 ){
            console.log ("O seu quarto número é inválido")
        }else if (num4 < 0 ){
            console.log("O seu quarto número é inválido")
        }else if (num4 < 6 && num4 > 0){
            cont_menor = cont_menor + 1
            media_menor = media_menor + num4 }


            if (num5 >= 6 && num5 < 10 ){
                cont_maior = cont_maior + 1
                media_maior = media_maior + num5 
            }else if (num5 > 10 ){
                console.log ("O seu quinto número é inválido")
            }else if (num5 < 0 ){
                console.log("O seu quinto número é inválido")
            }else if (num5 < 6 && num1 > 0){
                cont_menor = cont_menor + 1
                media_menor = media_menor + num5 }


                if (num6 >= 6 && num6 < 10 ){
                    cont_maior = cont_maior + 1
                    media_maior = media_maior + num6 
                }else if (num6 > 10 ){
                    console.log ("O seu sexto número é inválido")
                }else if (num6 < 0 ){
                    console.log("O seu sexto número é inválido")
                }else if (num6 < 6 && num6 > 0){
                    cont_menor =  cont_menor + 1
                    media_menor = media_menor + num6 }


                    if (num7 >= 6 && num7 < 10 ){
                        cont_maior = cont_maior + 1
                        media_maior = media_maior + num7 
                    }else if (num7 > 10 ){
                        console.log ("O seu sétimo número é inválido")
                    }else if (num7 < 0 ){
                        console.log("O seu sétimo número é inválido")
                    }else if (num1 < 6 && num7 > 0){
                        cont_menor = cont_menor + 1
                        media_menor = media_menor + num7 }

                        media_maior = media_maior / cont_maior 
                        media_menor = media_menor / cont_menor
                        console.log("A sua média maior é: " + media_maior)
                        console.log("A sua média menor é: " + media_menor)

                        resposta1 = document.getElementById("media_maior")
                        resposta1.innerHTML = "A sua média maior é: " + media_maior

                        resposta2 = document.getElementById("media_menor")
                        resposta2.innerHTML = "A sua média menor é: " + media_menor

};