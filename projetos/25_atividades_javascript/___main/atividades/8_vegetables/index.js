function calculo(){
let tomate=5.35,cebola=3.32,aipim=2.87,batata=4.43,cenoura=3.59,chuchu=1.79

num1 = document.getElementById("tomate").value
num2 = document.getElementById("cebola").value
num3 = document.getElementById("aipim").value
num4 = document.getElementById("batata").value
num5 = document.getElementById("cenoura").value
num6 = document.getElementById("chuchu").value

total_tomate = num1 * tomate
total_cebola = num2 * cebola
total_aipim = num3 * aipim
total_batata = num4 * batata
total_cenoura = num5 * cenoura
total_chuchu = num6 * chuchu

total_tota = total_tomate + total_cebola + total_aipim + total_batata + total_cenoura + total_chuchu

total_total = document.getElementById("total_total")
total_total.innerHTML = "O valor da sua compra total foi de: " + total_tota + " reais"
};