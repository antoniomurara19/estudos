function calculo(){
antigo = Number(document.getElementById("saldo_antigo").value)
deb = Number(document.getElementById("debito").value)
cred = Number(document.getElementById("credito").value)
let atual,final,res

atual = antigo - deb + cred
final = atual + (atual*0.65)/100

res = document.getElementById("final").innerHTML = "Meu caro Sr. ou Srta. seu saldo antigo era de R$" + antigo.toFixed(1) + ", e seu saldo atual é R$" + atual.toFixed(1) + " mas agora mais com o seu bônus de cliente fiel fica RS" + final.toFixed(1)
}