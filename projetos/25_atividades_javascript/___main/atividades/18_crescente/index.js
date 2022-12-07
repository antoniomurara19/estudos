function calculo(){let res1

num1 = Number(document.getElementById("num1").value)
if (num1 <= 0){
    alert(" Seu PRIMEIRO número não pode ser menor ou  0")
} 

num2 = Number(document.getElementById("num2").value)
if (num2 <= 0){
    alert(" Seu SEGUNDO número não pode ser menor ou  0")
} 

num3 = Number(document.getElementById("num3").value)
if (num3 <= 0){
    alert(" Seu TERCEIRO número não pode ser menor ou  0 ")
} 

num4 = Number(document.getElementById("num4").value)
if (num4 <= 0){
    alert(" Seu QUERTO número não pode ser menor ou  0")
} 

num5 = Number(document.getElementById("num5").value)
if (num5 <= 0){
    alert(" Seu QUINTO número não pode ser menor ou  0 ")
} 

num6 = Number(document.getElementById("num6").value)
if (num6 <= 0){
    alert(" Seu SEXTO número não pode ser menor ou  0 ")
} 

num7 = Number(document.getElementById("num7").value)
if (num7 <= 0){
    alert(" Seu SÉTIMO número não pode ser menor ou  0 ")
} 


let numeros = [num1,num2,num3,num4,num5,num6,num7]
numeros.sort(function(a,b){
    
    if ( a < b ) return 1;
    if ( b < a ) return -1; return 0;
});

    numeros = numeros.join(' - ')
    res1 = document.getElementById("cres")
    res1.innerHTML = "Decrescente = " + numeros
}

// 

function calculo1(){let res2
    num1 = Number(document.getElementById("num1").value)
if (num1 <= 0){
    alert(" Seu PRIMEIRO número não pode ser menor ou  0")
} 

num2 = Number(document.getElementById("num2").value)
if (num2 <= 0){
    alert(" Seu SEGUNDO número não pode ser menor ou  0")
} 

num3 = Number(document.getElementById("num3").value)
if (num3 <= 0){
    alert(" Seu TERCEIRO número não pode ser menor ou  0 ")
} 

num4 = Number(document.getElementById("num4").value)
if (num4 <= 0){
    alert(" Seu QUERTO número não pode ser menor ou  0")
} 

num5 = Number(document.getElementById("num5").value)
if (num5 <= 0){
    alert(" Seu QUINTO número não pode ser menor ou  0 ")
} 

num6 = Number(document.getElementById("num6").value)
if (num6 <= 0){
    alert(" Seu SEXTO número não pode ser menor ou  0 ")
} 

num7 = Number(document.getElementById("num7").value)
if (num7 <= 0){
    alert(" Seu SÉTIMO número não pode ser menor ou  0 ")
} 

    let numeros = [num1,num2,num3,num4,num5,num6,num7]
    
    numeros.sort(function(a,b){
        if ( a < b ) return -1;
        if ( b < a ) return 1; return 0;
    });
    numeros = numeros.join(' - ')
    res2 = document.getElementById("des")
    res2.innerHTML = "Crescente = " + numeros
    }

    