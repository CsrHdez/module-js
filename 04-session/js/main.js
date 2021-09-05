console.log('---------- Ejercicio 1 ----------');

let string = 'Kodemia'

function reverse(string) {
    return string.split('').reverse().join('');
}

console.log(reverse(string));


console.log('---------- Ejercicio 2 ----------');

let frase = 'a very large string';
let position = 0;

function letterToUpperCase(str, position) {
    if(!str[position]) {
        return str;
    }
    return letterToUpperCase(str.substring(0,position)+str.substring(position,position+1).toUpperCase()+str.substring(position+1,position+2).toLowerCase()+str.substring(position+2), position + 2)
}

console.log(letterToUpperCase(frase, position));


console.log('---------- Ejercicio 3 ----------');

let strVowel = 'Anaconda';
let strCon = 'Hola Koders';
let strNum = '100% de los';
let strC = '/* Soy un comentario */';
let validator = {numero: /\d/, vocal: /[aeiou]/i, consonante: /[bcdfghjklmñpqrstvwxyz]/i};

function starts(str, validator) {
    for(const [key, value] of Object.entries(validator)) {
        if(str[0].match(value))
            return `El string (${str}) comienza con ${key}`;
    }
    return `El string (${str}) comienza con un caracter especial`;
}

console.log(starts(strVowel, validator));
console.log(starts(strCon, validator));
console.log(starts(strNum, validator));
console.log(starts(strC, validator));
