//Diseñar un programa que permita validar el tipo de tarjeta de credito que rgistra el operador, para ello debemos tener en cuenta que las diferentes tarjetas tienen diferentes nomenclaturas:
//AMERICAN EXPRES:15 DIGITOS Y EMPIEZA POR (34-37)
//DINERS CLUB:TIENE 14 DIGITOS Y EMPIEZA POR (300-305 O 36 -38)
//DISCOVER:TIENE 16 DIGITOS Y EMPIEZA POR (6011)
//MASTECARD:TIENE 16 DIGITOS Y EMPIEZA POR (51-55)
//VISA:TIENE 16 DIGITOS Y EMPIEZA POR (4)
//El programa solo se debe permitir el ingreso de enteros positivos y maximo  16 caracteres , si el operador ingresa un carater no permitido se dene mostrar por pantalla el error y solicitar nuevamente el numero de su tarjeta de credito .
//para este ejericio se colicta trabajar con modeos , expresiones regulares y condicionales . si esta permitido solicitar al operador el tipo de su tarjeta de credito .




// let opcion_tarjeta = parseInt(prompt("escoje el tipo de tarjeta de credito:\n1.AMERICAN EXPRES\n2.DINNER CLUB\n3.DISCOVER\n4.MASTERARD.\n5.VISA:"));

// const opcionValidar = function (opcion_tarjeta) {
//   let tipo_tarjeta = "";
//   switch (opcion_tarjeta) {
//     case 1:
//       tipo_tarjeta = "american expres";
     
//     case 2:
//       tipo_tarjeta = "dinner club ";
//     case 3:
//       tipo_tarjeta = "discover";
//     case 4:
//       tipo_tarjeta = "mastercard ";
//     case 5:
//       tipo_tarjeta = "visa";
//     default:
//       break;
//   }
//    return tipo_tarjeta;
// }
// let tipos_tarjetas=opcionValidar(opcion_tarjeta);

// if(opcion_tarjeta){
//   let num_credito = parseInt(prompt("ingrese el numero de su tarjeta de credito:"));
//   const validar = function (num_credito,tipo_tarjeta) {
//   let regex = /^\d({0-15})$/;  
//   if (num_credito == regex) alert("tarjeta valida ");
//   else (alert("tarejta no valida ,ingrese de nuevo su numero de tarjeta "))
// }
// }

// validar();