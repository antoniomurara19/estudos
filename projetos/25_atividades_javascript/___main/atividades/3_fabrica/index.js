function volume(){
    let raio,altura,hora,dia,mes,volume,area_b,volume_hora,volume_dia,volume_mes,raio_q
    raio = document.getElementById("raio").value
    altura = document.getElementById("altura").value
    hora = document.getElementById("hora").value
    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value

    raio_q = raio * raio
    area_b = raio_q * 3.14159265358979323846264338327950288
    volume = area_b * altura
    volume_hora = volume * hora
    volume_dia = volume_hora * dia
    volume_mes = volume_dia * mes

    resultado = document.getElementById('volume')
    resultado.innerHTML = "O volume da produção mensal é de: " + volume_mes + "cm³"

    console.log('A sua área da base é =', area_b,"cm²")
    console.log('O seu volume por cilindro é =', volume,"cm³")
    console.log('O seu volume de cilindros por hora é =', volume_hora,"cm³")
    console.log('O seu volume de cilindros por dia é =', volume_dia,"cm³")
    console.log('O seu volume de cilindros por mês é =', volume_mes,"cm³")
};









