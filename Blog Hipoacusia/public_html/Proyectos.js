document.querySelector('#player').addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 60;
var necesarios = 30;

function sumarPuntos(){
      puntos ++;
      document.querySelector("#Puntos").innerHTML = 
      "Puntos: <b>" + puntos + "/"  + necesarios + "</b>";
  
  RadnNum = Math.round(Math.random()*540);
  RadnNum2 = Math.round(Math.random()*335);
    document.querySelector('#player').style.marginTop = RadnNum + "px";
    document.querySelector('#player').style.marginLeft = RadnNum2 + "px";
    if(puntos == 30){
      alert("Ganaste Perrito maquinola");
      tiempo = 60;
      puntos = 0;
    }
}

function restarTiempo (){
  tiempo --;
     document.querySelector('#Tiempo').innerHTML = "tiempo " + tiempo;
     if (tiempo == 0){
       alert("Perdiste maestro");
       tiempo = 60;
       puntos = 0;
     }
     
}

setInterval(restarTiempo,1000)


