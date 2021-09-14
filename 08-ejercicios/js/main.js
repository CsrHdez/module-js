/* Para todos los ejercicios con funciones donde puedan identificar si recibira o no parametos: */

/* 1. Dodo un string de palabras, devolver la palabra más larga */

let stringLarge = string => {
    let arrWords = string.split(' ');
    let largeCurrent = '';
    let wordLarge = '';
    let wordPrev = '';
    if(arrWords.length > 1){
        for(let i = 1; i < arrWords.length; i++){
            wordPrev = wordLarge;
            wordLarge = arrWords[i].length > arrWords[i-1].length ? arrWords[i] : arrWords[i-1];
        }
    }
}

/* 2. Crea un programa que permita detectar si una frase finaliza con punto. */
let endsPoint = frase => frase.toString().slice(-1) === '.';

console.log(`${endsPoint('Hola como estas.')?'Tú frase termina con punto.':'Tú frase no termina con punto.'}`);

/* 3. Crea un programa que permita al usuario retornar el número de coincidencias de una palabra en una frase que el mismo usuario introduzca. */

let findWord = () => {
    let str = prompt('Escribe una frase: ');
    let word = prompt('Escribe la palabra que deseas buscar: ');
    let result = str.match(new RegExp(word, 'gi'));
    return result ? 'La frase (' frase + ') tiene ' + result.length + ' veces la palabra ' + word : 'No se encontraron coincidencias.';
}

console.log(findWord());

/* 4. Crea un programa que permita al usuario extraer una subcadena de una cadena dada. */
let extractSubStr = () => {
}
