function calculo() {
    id1 = Number(document.getElementById("idade1").value)
    id2 = Number(document.getElementById("idade2").value)
    id3 = Number(document.getElementById("idade3").value)
    id4 = Number(document.getElementById("idade4").value)
    id5 = Number(document.getElementById("idade5").value)
    id6 = Number(document.getElementById("idade6").value)
    id7 = Number(document.getElementById("idade7").value)

    nome1 = document.getElementById("nome1").value
    nome2 = document.getElementById("nome2").value
    nome3 = document.getElementById("nome3").value
    nome4 = document.getElementById("nome4").value
    nome5 = document.getElementById("nome5").value
    nome6 = document.getElementById("nome6").value
    nome7 = document.getElementById("nome7").value

    let res1,res2,res3,res4,res5,res6,res7

    if (id1 >= 6 && id1 <= 9){
        res1 = document.getElementById("res1").innerHTML = "O(A), " + nome1 + " pertence a categoria INFANTIL e tem " + id1 + " anos"
    } else if (id1 >= 10 && id1 <= 13){
        res1 = document.getElementById("res1").innerHTML = "O(A), " + nome1 + " pertence a categoria ADOLESCENTE e tem " + id1 + " anos"
    } else if (id1 >= 14 && id1 <= 17){
        res1 = document.getElementById("res1").innerHTML = "O(A), " + nome1 + " pertence a categoria JUVENIL e tem " + id1 + " anos"
    }   else ( res1 = document.getElementById("res1").innerHTML = "IDADE INVÁLIDA")


    if (id2 >= 6 && id2 <= 9){
        res2 = document.getElementById("res2").innerHTML = "O(A), " + nome2 + " pertence a categoria INFANTIL e tem " + id2 + " anos"
    } else if (id2 >= 10 && id2 <= 13){
        res2 = document.getElementById("res2").innerHTML = "O(A), " + nome2 + " pertence a categoria ADOLESCENTE e tem " + id2 + " anos"
    } else if (id2 >= 14 && id2 <= 17){
        res2 = document.getElementById("res2").innerHTML = "O(A), " + nome2 + " pertence a categoria JUVENIL e tem " + id2 + " anos"
    }   else ( res2 = document.getElementById("res2").innerHTML = "IDADE INVÁLIDA")


    if (id3 >= 6 && id3 <= 9){
        res3 = document.getElementById("res3").innerHTML = "O(A), " + nome3 + " pertence a categoria INFANTIL e tem " + id3 + " anos"
    } else if (id3 >= 10 && id3 <= 13){
        res3 = document.getElementById("res3").innerHTML = "O(A), " + nome3 + " pertence a categoria ADOLESCENTE e tem " + id3 + " anos"
    } else if (id3 >= 14 && id3 <= 17){
        res3 = document.getElementById("res3").innerHTML = "O(A), " + nome3 + " pertence a categoria JUVENIL e tem " + id3 + " anos"
    }   else ( res3 = document.getElementById("res3").innerHTML = "IDADE INVÁLIDA")


    if (id4 >= 6 && id4 <= 9){
        res4 = document.getElementById("res4").innerHTML = "O(A), " + nome4 + " pertence a categoria INFANTIL e tem " + id4 + " anos"
    } else if (id4 >= 10 && id4 <= 13){ 
        res4 = document.getElementById("res4").innerHTML = "O(A), " + nome4 + " pertence a categoria ADOLESCENTE e tem " + id4 + " anos"
    } else if (id4 >= 14 && id4 <= 17){
        res4 = document.getElementById("res4").innerHTML = "O(A), " + nome4 + " pertence a categoria JUVENIL e tem " + id4 + " anos"
    }   else ( res4 = document.getElementById("res4").innerHTML = "IDADE INVÁLIDA")


    if (id5 >= 6 && id5 <= 9){
        res1 = document.getElementById("res5").innerHTML = "O(A), " + nome5 + " pertence a categoria INFANTIL e tem " + id5 + " anos"
    } else if (id5 >= 10 && id5 <= 13){
        res5 = document.getElementById("res5").innerHTML = "O(A), " + nome5 + " pertence a categoria ADOLESCENTE e tem " + id5 + " anos"
    } else if (id5 >= 14 && id5 <= 17){
        res5 = document.getElementById("res5").innerHTML = "O(A), " + nome5 + " pertence a categoria JUVENIL e tem " + id5 + " anos"
    }   else ( res5 = document.getElementById("res5").innerHTML = "IDADE INVÁLIDA")


    if (id6 >= 6 && id6 <= 9){
        res6 = document.getElementById("res6").innerHTML = "O(A), " + nome6 + " pertence a categoria INFANTIL e tem " + id6 + " anos"
    } else if (id6 >= 10 && id6 <= 13){
        res6 = document.getElementById("res6").innerHTML = "O(A), " + nome6 + " pertence a categoria ADOLESCENTE e tem " + id6 + " anos"
    } else if (id6 >= 14 && id6 <= 17){
        res6 = document.getElementById("res6").innerHTML = "O(A), " + nome6 + " pertence a categoria JUVENIL e tem " + id6 + " anos"
    }   else ( res6 = document.getElementById("res6").innerHTML = "IDADE INVÁLIDA")


    if (id7 >= 6 && id7 <= 9){
        res7 = document.getElementById("res7").innerHTML = "O(A), " + nome7 + "pertence a categoria INFANTIL e tem " + id7 + "anos"
    } else if (id7 >= 10 && id7 <= 13){
        res7 = document.getElementById("res7").innerHTML = "O(A), " + nome7 + "pertence a categoria ADOLESCENTE e tem " + id7 + "anos"
    } else if (id7 >= 14 && id7 <= 17){
        res7 = document.getElementById("res7").innerHTML = "O(A), " + nome7 + "pertence a categoria JUVENIL e tem " + id7 + "anos"
    }   else ( res7 = document.getElementById("res7").innerHTML = "IDADE INVÁLIDA")}
    

 

