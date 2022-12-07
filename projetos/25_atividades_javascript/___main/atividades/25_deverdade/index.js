function calculo() {
    let num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,pedido,result

    num1 = Number(document.getElementById("cq").value)
    num2 = Number(document.getElementById("mq").value)
    num3 = Number(document.getElementById("b").value)
    num4 = Number(document.getElementById("cb").value)
    num5 = Number(document.getElementById("ce").value)
    num6 = Number(document.getElementById("cf").value)
    num7 = Number(document.getElementById("r").value)
    num8 = Number(document.getElementById("s").value)
    num9 = Number(document.getElementById("c").value)
    num10 = Number(document.getElementById("cl").value)

    pedido = (num1*7.9)+(num2*5.75)+(num3*11.35)+(num4*14.6)+(num5*15.4)*(num6*12.9)+(num7*4.9)+(num8*4.3)+(num9*3.5)+(num10*4*2)

    result = document.getElementById("antonio").innerHTML = "O seu pedido ficou R$ " + pedido.toFixed(2) + " meu chapa!"
}