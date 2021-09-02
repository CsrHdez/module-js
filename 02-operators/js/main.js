console.log("------------------- Ejercicio 1 -------------------");
let num1 = parseInt(prompt("Escribe el primer número"));
let num2 = parseInt(prompt("Escribe el segundo número"));

console.log(`Suma de ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Resta de ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplicación de ${num1} * ${num2} = ${num1 * num2}`);
console.log(`divición de ${num1} / ${num2} = ${num1 / num2}`);

console.log("------------------- Ejercicio 2 -------------------");

let numUno = parseInt(prompt("Escribe el primer número"));
let numDos = parseInt(prompt("Escribe el segundo número"));

if ( numUno > numDos ) {
	console.log("El primer número es mayor que el segundo");
}

console.log("------------------- Ejercicio 3 -------------------");

let char1 = prompt("Escriba una letra:");
let char2 = prompt("Escriba otra letra:");

if ( char1 < char2 || (char1.charCodeAt() == 241 && char2.charCodeAt() >= 79) ) {
	console.log("La primera letra escrita aparece primero en el abecedario");
}
