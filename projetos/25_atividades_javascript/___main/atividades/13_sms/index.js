function calculo(){
let msg,inicio=5,fim

msg = Number(document.getElementById("msg").value)

if (msg < 75){
 fim = inicio
} else if (msg > 75 &&  msg < 240){
    fim = inicio + (msg*0.05)
}else if (msg > 240){
    fim = inicio + (msg*0.10)
}
finn = document.getElementById("mensagem")
finn.innerHTML = "O seu custo telefônico foi de R$: " + fim
}