// Solicitar al usuario su nombre(s) y apellido(s)
// Regesar en una sola cadena, donde el nombre sea minusculas y los apellidos sean mayusculas.
// input nombre = "Cesar Javier"
// input apellido = "Hernandez Bautista"
//
// output: "cesar javier HERNANDEZ BAUTISTA"

console.log('---------- ejercicio 1 ----------');

let nombre = prompt('Escriba su(s) nombre(s): ');
let apellido = prompt('Escriba su(s) apellido(s): ');

console.log(`${nombre.toLowerCase()} ${apellido.toUpperCase()}`);


console.log('---------- ejercicio 2 ----------');

let nombreCompleto = prompt('Escriba su nombre completo: ');
console.log(`Tú nombre tiene ${nombreCompleto.length} letras`);


console.log('---------- ejercicio 3 ----------');
