/*
 * Crear una funcion que permita al usuario retornar el número de coincidencias de
 * una palabra en una frase que el mismo usuario ingreso.
 * input: 
 *  palabra a buscar: 'Hola';
 *  frase: 'Hola me llamo Fernanda Palacios. Hola otra vez.'
 *
 * output: 'El número de coincidencias de ${palabra a buscar} es de ${numero de coincidencias} veces :D'
 */

let frase = 'Hola me llamo Fernanda Palacios. Hola otra vez.'
let palabraBuscada = 'hola'

function busqudaPalabra(frase, palabraBuscada) {
    return frase.match(new RegExp(palabraBuscada, 'gi'));
}

let result = busqudaPalabra(frase, palabraBuscada);
console.log(`El número de conincidencias de ${palabraBuscada} es de ${ result ? result.length : 0 } veces :D`);


/*
 * Crear una función o funciones que permitan elegir el usuario 
 * una operación básica, indicar dos valores y ejecutar la operación 
 * seleccionada. imprimir el resultado.
 * output: "La ${operacion} de los dos números que indicaste es ${resultado}"
 */

let num1 = prompt('Escribe el primer número');
let num2 = prompt('Escribe el segundo número');
let operacion = prompt('Escribe el nombre de la operación deseada: (suma, resta, multiplicacion, division)')

let operaciones = {suma: '+', resta: '-', multiplicacion: '*', division: '/'};

function ejecutarOperacion(num1, num2, operacion) {
    if(Object.keys(operaciones).includes(operacion)) {
        let resultado = eval(num1+operaciones[operacion]+num2);
        return `La ${operacion} de los dos números (${num1}, ${num2}) que indicaste es ${resultado}`;
    }
    return `La operación (${operacion}) no esta en nuestras posibilidades realizarla.`;
}

console.log(ejecutarOperacion(num1, num2, operacion));
