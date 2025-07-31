//Varibles
/*
let numeroSecreto=2;
let numeroUsuario = prompt ("Me indicas un número 1 y 10 por favor:");


console.log(numeroUsuario);


if (numeroUsuario == numeroSecreto){
    alert(`Acertaste el numero es: ${numeroUsuario}, mi loc`);
}else{
    alert('No acertaste el número');
}


*/


/*
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);
*/

/*
alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');
let numeroSecreto = Math.floor(Math.random()*10)+1;
console.log(numeroSecreto);
if (eleccion == numeroSecreto) {
    alert('Adivinaste'); }

*/
/*

let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}
*/


//DESAFIO:HORA DE PRACTICAR

/*
alert ("Bienvenida y bienvenido a nuestro sitio web!")

let nombre="Lua";

let edad=25;

let numeroDeVentas=50;

let saldoDisponible=1000;

// Punto 6
alert("¡Error! Completa todos los campos");

// Punto 7  
let mensajeDeError = "¡Error! Completa todos los campos"
alert(mensajeDeError);


let nombreUsuario = prompt ("Favor de proporcionar el nombre del usuario")

console.log(nombreUsuario);

let edadUsuario= prompt("Favor de ingresar la edad");
console.log(edadUsuario);
if(edadUsuario >= 18 ){
  alert("¡Puedes obtener tu licencia de conducir!");

}
*/

/*
let edad = prompt("Ingrese su edad");

if(edad >=18){
  console.log("Eres Mayor de edad.");
}else {
  console.log("Eres Menor de edad.");
}

*/
/*
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto + );
}
    */
/*
let diaSemana = prompt ('Ingrese el dia de la semana');

if (diaSemana == "Sabado" || diaSemana == "Domingo"){
  alert("Buen fin de semana");

}else {
  alert("Buena semana");
}
*/
/*
let name = prompt("Ingresa tu nombre");

alert (`Bienvenido ${name}`);
*/

/*
let saldo = 100;

let nombreUser = prompt ("Ingresa codigo de usuario");

alert(`Hola ${nombreUser}, tu saldo es de ${saldo} pesos mxm`); 

*/

let nombreJugador = prompt ("Ingresa tu nombre de jugador");

let puntuacion = prompt ("Ingresa tu puntuacion");

if(puntuacion >=100){
  alert(`Felicidades ${nombreJugador}, tu puntuacion es de ${puntuacion}, eres el maximo ganador PIBE`);
}else{
  alert(`Lo siento ${nombreJugador}, tu puntuacion es de ${puntuacion}, no eres el gran ganador capo`);
}