function mulhermaishomem(){
a = Number(document.getElementById("altura").value)
tecou = document.getElementById("tecou").value

let pesoh,resh,resm,pesom,nada


switch (tecou) {
    case "H" :
            pesoh = ( 72.7 * a ) - 58
            pesoh = document.getElementById("nada").innerHTML = "O peso ideal para um homem da sua altura é de " + pesoh.toFixed(1) +"kg"
        break;
        case "h" :
            pesoh = ( 72.7 * a ) - 58
            pesoh = document.getElementById("nada").innerHTML = "O peso ideal para um homem da sua altura é de " + pesoh.toFixed(1) +"kg"
        break;
    case "M" :
            pesom = ( 62.1 * a ) - 44.7
            pesom = document.getElementById("nada").innerHTML = "O peso ideal para uma mulher da sua altura é de " + pesom.toFixed(1) +"kg"
        break;
        case "m" :
            pesom = ( 62.1 * a ) - 44.7
            pesom = document.getElementById("nada").innerHTML = "O peso ideal para uma mulher da sua altura é de " + pesom.toFixed(1) +"kg"
        break;

    default:
        nada = document.getElementById("nada").innerHTML = "O caractere selecionado é INVÁLIDO" 
        break;
}















}