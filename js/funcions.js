var m1;
var m2;
var op;
function init(){


  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
   var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  var resultado = document.getElementById('resultado');
  var igual = document.getElementById('igual');
  var borrar = document.getElementById('reset');


 //FUNCIONES
  uno.onclick = function(p){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(p){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(p){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(p){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(p){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(p){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(p){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(p){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(p){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(p){
      resultado.textContent = resultado.textContent  + "0";
  }
  punto.onclick = function(p){
      resultado.textContent = resultado.textContent  + ".";
  }
  borrar.onclick = function(p){
      resetear();
  }

  //OPERACIONES
  suma.onclick = function(p){
      m1 = resultado.textContent;
      op = "+";
      limpiar();
  }
  resta.onclick = function(p){
      m1 = resultado.textContent;
      op = "-";
      limpiar();
  }
  multiplicacion.onclick = function(p){
      m1 = resultado.textContent;
      op = "*";
      limpiar();
  }
  division.onclick = function(p){
      m1 = resultado.textContent;
      op = "/";
      limpiar();
  }
  igual.onclick = function(p){
      m2 = resultado.textContent;
      resolver();
  }
}

//LIMPIAR
function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  m1 = 0;
  m2 = 0;
  op = "";
}

//RESOLVER
function resolver(){
  var res = 0;
  switch(op){
    case "+":
      res = parseFloat(m1) + parseFloat(m2);
      break;
    case "-":
        res = parseFloat(m1) - parseFloat(m2);
        break;
    case "*":
      res = parseFloat(m1) * parseFloat(m2);
      break;
    case "/":
      res = parseFloat(m1) / parseFloat(m2);
      break;
  }
  resetear();
  resultado.textContent = res;
}