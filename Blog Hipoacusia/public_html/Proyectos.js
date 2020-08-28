document.querySelector('#player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
function sumarPuntos(){
    puntos = puntos + 1;
    document.querySelector(".PointerB").innerHTML = "Puntos: <b>" + puntos + "</b>";
  
  RadnNum = Math.round(Math.random()*540);
  RadnNum2 = Math.round(Math.random()*335);
  document.querySelector('#player').style.marginTop = RadnNum + "px";
  document.querySelector('#player').style.marginLeft = RadnNum2 + "px";
}


