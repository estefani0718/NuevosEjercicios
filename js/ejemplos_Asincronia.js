// Ejemplo de setTimeout

// let personaSaludo=function(nombre){
//   setTimeout(() => {
//     console.log("que mas ");
//   }, 2000);
//   return nombre;

// }
// let nombre ="estefani" ;
// console.log(personaSaludo(nombre));

// Ejemplo de setInterval

// el setInterval cada segundo envie el mensaje y el clearInterval le da stop .
//  let estefani= setInterval(() => {
//     console.log("que paso ? ");
  
//  }, 0);
// clearInterval(estefani);// se debe declarar una variable dentro de ella, debe a estar el nombre de la  funcion para dar un  stop.

// CALLBAKS

// let sena = "sena cimi";
// let nombre = "estefani";

// function senas(nombre,sena) {// aqui recibe los parametros de la calback 
//   console.log("sena al que pertenezco:"+sena+", mi nombre es:"+nombre);// aqui se imprime los dos parametros enviados por la calback
// }

// function pertenecer(sena, nombre, senas) {//recibe dos argumentos , dos variables tipo string y una callback la cula es la funcion 
//   senas(nombre , sena);// aqui esta la calback , que enviara lo argumentos a la funcion anterior 
// }

// pertenecer(sena, nombre, senas);// se imprime la funcion con dos argumetos y la calback, en este caso la funcion

// Promesas

let sal = new Promise((resolve, reject) => {
  resolve("el agua en vida!!");
  setTimeout(() => {
    reject(new error("error"));

  }, 1000);
 
});
sal.then();