function calculo(){
    var fim1=0.0,fim2=0.0,fim3=0.0,fim4=0.0,fim5=0.0,fim6=0.0,fim7=0.0,fim8=0.0,fim9=0.0,fim10=0.0,fim11=0.0
    
        tecla = document.getElementById("comida").value
        quantidade = Number(document.getElementById("qnt").value)
        compras = document.getElementById("compras")
        
        res1 = document.getElementById("resultado1")
        res2 = document.getElementById("resultado2")
        res3 = document.getElementById("resultado3")
        res4 = document.getElementById("resultado4")
        res5 = document.getElementById("resultado5")
        res6 = document.getElementById("resultado6")
        res7 = document.getElementById("resultado7")
        res8 = document.getElementById("resultado8")
        res9 = document.getElementById("resultado9")
        res10 = document.getElementById("resultado10")
        res11 = document.getElementById("resultado11")
        res12 = document.getElementById("resultado12")

    


            if (tecla == "NA"){
                fim11 = (fim1 + fim2 + fim3 + fim4 + fim5 + fim6 + fim7 + fim8 + fim9 + fim10)
                console.log(fim2)
                console.log(fim8)
                res11.innerHTML = "Ficou R$ " + fim11
            }else if (tecla == "na" ){
                fim11 = fim1 + fim2 + fim3 + fim4 + fim5 + fim6 + fim7 + fim8 + fim9 + fim10 
                res11.innerHTML = "Ficou R$ " + fim11
            }else if(tecla == "CQ"){
                fim1 = 7.9 * quantidade
                res1.innerHTML = "Ficou R$" + fim1.toFixed(2) + " de cachorro quente(s)"
            }else if(tecla == "cq"){
                fim1 = 7.9 * quantidade
                res1.innerHTML = "Ficou R$" + fim1.toFixed(2) + " de cachorro quente(s)"
            }else if(tecla ==  "MQ"){ 
                fim2 = 5.75 * quantidade
                res2.innerHTML = "Ficou R$" + fim2.toFixed(2) + " de misto quente(s)"
            }else if(tecla ==  "mq"){ 
                fim2 = 5.75 * quantidade
                res2.innerHTML = "Ficou R$" + fim2.toFixed(2) + " de misto quente(s)"
            }else if(tecla ==  "B"){
                fim3 = 11.35 * quantidade
                res3.innerHTML = "Ficou R$" + fim3.toFixed(2) + " de bauru(s)"
            }else if(tecla ==  "b"){
                fim3 = 11.35 * quantidade
                res3.innerHTML = "Ficou R$" + fim3.toFixed(2) + " de bauru(s)"
            }else if (tecla == "CB"){
                fim4 = 14.6 * quantidade
                res4.innerHTML = "Ficou R$" + fim4.toFixed(2) + " de cheese burguer(s)"
            }else if(tecla ==  "cb"){
                fim4 = 14.6 * quantidade
                res4.innerHTML = "Ficou R$" + fim4.toFixed(2) + " de cheese burguer(s)"
            }else if(tecla ==  "CE"){ 
                fim5 = 15.6 * quantidade
                res5.innerHTML = "Ficou R$" + fim5.toFixed(2) + " de cheese egg(s)"
            }else if(tecla ==  "ce"){
                fim5 = 15.6 * quantidade
                res5.innerHTML = "Ficou R$" + fim5.toFixed(2) + " de cheese egg(s)"
            }else if(tecla ==  "CF"){
                fim6 = 12.9 * quantidade
                res6.innerHTML = "Ficou R$" + fim6.toFixed(2) + " de cheese frango(s)"
            }else if(tecla ==  "cf"){
                fim6 = 12.9 * quantidade
                res6.innerHTML = "Ficou R$" + fim6.toFixed(2) + " de cheese frango(s)"
            }else if(tecla ==  "R"){
                fim7 = 4.9 * quantidade
                res7.innerHTML = "Ficou R$" + fim7.toFixed(2) + " de refrigerante(s)"
            }else if(tecla ==  "r"){
                fim7 = 4.9 * quantidade
                res7.innerHTML = "Ficou R$" + fim7.toFixed(2) + " de refrigerante(s)"
            }else if(tecla ==  "S"){ 
                fim8 = 4.3 * quantidade
                res8.innerHTML = "Ficou R$" + fim8.toFixed(2) + " de suco de frutas(s)"
            }else if(tecla ==  "s"){ 
                fim8 = 4.3 * quantidade
                res8.innerHTML = "Ficou R$" + fim8.toFixed(2) + " de suco de frutas(s)"
            }else if(tecla ==  "C"){ 
                fim9 = 3.5 * quantidade
                res9.innerHTML = "Ficou R$" + fim9.toFixed(2) + " de café médio(s)"
            }else if(tecla ==  "c"){
                fim9 = 3.5 * quantidade
                res9.innerHTML = "Ficou R$" + fim9.toFixed(2) + " de café médio(s)"
            }else if(tecla ==  "CL"){
                fim10 = 4.2 * quantidade
                res10.innerHTML = "Ficou R$" + fim10.toFixed(2) + " de café com leite(s)"
            }else if(tecla ==  "cl"){ 
                fim10 = 4.2 * quantidade
                res10.innerHTML = "Ficou R$" + fim10.toFixed(2) + " de café com leite(s)"
            }else (res12.innerHTML = "Seu código é inválido")
}
   