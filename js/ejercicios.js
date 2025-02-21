//1.genere un patron de asteriscos en forma de piramide
// const pi = function () {

//   for (let j = 0; j <10;j++){
//     let ast = "";
//     for (let i= 1; i < 10-i; i++){
//        ast += "";
//     }
//     for (let a = 1; a < i * 2; a++){
//       ast = "*";
//     }
//   }
//   console.log(ast);
// }
// pi();

// let num = parseInt(prompt("ingrese un valor para la piramide: "));

// const pira = (num)=>{
//   for (let i = 0; i < num; i++){
//     console.log(i);
//   }
// }
// pira(num);


//2.escribir una funcion llamada sumarArreglo que reciba tres argumentos :arreglo de numeros,posicion inicial y la posicion final.
// la funcion debe retornar la suma de todos los numeros dentro del rangoo (la posiion inicial y la posicion final, incluyendose).

//nota: puedes asumir que la posicion inicial va a ser menor o igual a la posicion final y que estan dentro de los limites del arreglo.
 
// const sumarArreglo = (pI, aN, pf) => {
//   let rango = 0;
//   if (pI < aN.length && pf > pI && pI > 0) {
//     for (let a = pI; a <= pf; a++){
//       rango = rango + aN[a];
//     }
//   } else {
//     throw new Error("los rangos superar el limite de arreglo ");
//   }
//   return rango;
// }
// let pI = parseInt(prompt("ingrese un numero o valor para la posicion inicial"));
// let pf = parseInt(prompt("ingrese un numero o valor para la posicion final"));
// let aN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
// let r = sumarArreglo(pI, aN, pf);
// console.log(r);


//3.escribe una funcion llamada likes que reciba un numero y retorne un string utilizado el formato de k para miles y M para millones
//por ejemplo :
//1400 se convierte en 1k
//34,567 se convierte en 34k
//7'456,345 se onvierte en 7 m
//si el numero es menor a 1000 se debe devolver el mismo numero como un string .


// const likes = (num) => {
//   let miles = "k";
//   let millones = "M";
//   if (num >= 1000 && num  <1000000) {
//     let v = 1000;
//     console.log(`${Math.floor(num/v).toFixed(0)}${miles}`);
//   }
//   else {
//     if (num > 1000000) {
//       let v = 1000000;
//        console.log(`${Math.floor(num/v).toFixed(0)}${millones}`);
//     }
      
//   }
  

// }
// let num = parseInt(prompt("ingrese un numero de likes:"));
// likes();

//4.escribir una funcion llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una linea a parte

// let array = [1,2,3,4,5];
// const imprimirArreglo=(array)=>{
//   for (let h = 0; h < array.length;h++) console.log(array[h]);
// }
// console.log(imprimirArreglo(array));

//5.escribir una funcion llamada FIZZBUSS que reciba un numero y retorne un string de acuerdo a lo siguiente :
//"FIZZ" si el numero es multiplo de 3 .
//"BUZZ" si el numero es multiplo de 5.
//"FIZZBUZZ" si el numero es ultiplo tanto de 3 como de 5.
// si no cumple con ninguna de las condiciones anteriores debe retornar e mismo numero.

// const fizzbuzz = num => {
//   let string = "";
//   if (num %3==0) {
//     string += "Fizz";
//   }
//   if (num % 5 == 0) {
//     string += "Buzz";
//   }
//   if (string == "") {
//     string = num;
//   }
//   return string;
// }
// let num = parseInt(prompt("ingrese un numero :"));
// let resultado = fizzbuzz(num);
// console.log(resultado);


// 6.Escribir una funcion llamada multiplicarArreglo que reciba un arreglo de numeros y retorne la multiplicacion de todos los elementos.
// let arrayNum = [1,2,3,5,10];
// const multiplicarArreglo = arrayNum => {
//   let mul=1 ;
//   for (let j = 0; j < arrayNum.length; j++) {
//     mul*=arrayNum[j]
//   }
//   return mul;
// }
// let resul = multiplicarArreglo(arrayNum);
// console.log(resul);


//8. Escribir una funcion llamda calcularImpuestos  que reciba dos argumentos numericos: edad e ingresos .
//si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 100 debe retornar ingresos *40%.De lo contrario retornar 0 .
// let edad = parseInt(prompt("ingrese la edad :"));

// let ingresos = parseInt(prompt("ingresar los ingresos:"));

// const calcularImpuestos = (edad, ingresos)=>{
//   if (edad  >=18 && ingresos>=1000) {
//     return ingresos * 0.4;
//   }
//   else {
//     return 0;
//   }
// }
// let rel = calcularImpuestos(edad, ingresos);
// console.log(rel);

//9. Escribir una funcion llamda numeroDeAes que reciba un string y retorne eel numero de veces que aprece la letra "a".

// let letra = prompt("ingrese una palabra");

// const numeroDeAes = (letra) => {
//   console.log(letra.match(/a/i));
// }
// let f = numeroDeAes(letra);
// console.log(f);

//10.Escribir una funcion llamada removerCeros que reciba una arreglo de numeros y retorne un  nuevo arreglo excluyendo los ceros .

// let arregloN = [0, 1, 2, 3, 4];

// const removerCeros = (arregloN) => {

  
  
// }
// let final = removerCeros(arregloN);
// console.log(final);


//11.Escribir una funcion llamada transcribir qu reciba un string (una cadena de adn ) y retorne otro string (su complemeto arn ):
//los complementos son lo siguientes :
//G->C
//C->G
//T->A
//A->U

// let adn = prompt("ingrese una pequeña cadena de texto (ADN):");

// const transcribir = (adn) => {
//   let nueva = adn.split(adn);
//   for (let h = 0;  h < nueva.length;h++ ){
//     if (nueva=="G" ) {
//       nueva[h] = "C";
//     }
//     if (nueva == "C") {
//       nueva[h] = "G";
//     }
//     if (nueva=="T") {
//       nueva[h] = "A";
//     }
//     if (nueva=="A") {
//       nueva[h] = "U";
//     }
    
//   }
//   return nueva.join("");
// }
// let resul = transcribir(adn);
// console.log(resul);



//12.escribir una funcion llamada capitalizar que reciba un string y capitalice la primera letra .

// let str = prompt("ingrese una palabra :");

// const capitalizar=(str) => {
//   let capi = "";
//   capi = str[0].toUpperCase();
//   alert(capi);

// }
// let re = capitalizar(str);
// console.log(re);

//13.