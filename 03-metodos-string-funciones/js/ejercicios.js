// Solicitar al usuario su nombre(s) y apellido(s)
// Regesar en una sola cadena, donde el nombre sea minusculas y los apellidos sean mayusculas.
// input nombre = "Cesar Javier"
// input apellido = "Hernandez Bautista"
//
// output: "cesar javier HERNANDEZ BAUTISTA"

console.log('---------- ejercicio 1 ----------');

let nombre = prompt('Escriba su(s) nombre(s): ');
let apellido = prompt('Escriba su(s) apellido(s): ');

function textTransform(nombre, apellido) {
    return `${nombre.toLowerCase()} ${apellido.toUpperCase()}`;
}

console.log(textTransform(nombre, apellido));


console.log('---------- ejercicio 2 ----------');

let nombreCompleto = prompt('Escriba su nombre completo: ');

function nombreLength(nombreCompleto) {
	return nombreCompleto.length;
}

console.log(`Tú nombre tiene ${nombreLength(nombreCompleto)} letras`);


console.log('---------- ejercicio 3 ----------');

let nombreComp = prompt('Escriba su nombre completo: ');
let vowels = 'aeiou';

function countVowels(nombreComp) {
	nombreComp = nombreComp.toLowerCase();
	let numVowels = 0;

	for(let i = 0; i < nombreComp.length; i++) {
		if(vowels.indexOf(nombreComp[i]) !== -1) {
			numVowels++;
		}
	}
	
	return numVowels;
}

console.log(`Tú nombre (${nombreComp}) tiene ${countVowels(nombreComp)} vocales`);


console.log('---------- ejercicio 4 ----------');

let texto = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante completa al estudiante que tiene a su lado";

function koderReplace(texto, buscada, reemplazo) {
	let count = 0;
	let position = texto.indexOf(buscada);
	while(position !== -1) {
		count++;
		position = texto.indexOf(buscada, position+buscada.length);
	}
	
	return {count: count, texto: texto.replaceAll(buscada, reemplazo)};
}

const textR = koderReplace(texto, 'estudiante', 'koder');
console.log(`La palabra estudiante aparece ${textR.count}`);
console.log(textR.texto);


console.log('---------- ejercicio 5 ----------');

let string1 = 'soy un string';
let string2 = 'soy otro string xd';

function stringLarge(string1, string2) {
	if(string1.length === string2.length) {
		return 'somos iguales';
	}
	return `El string más largo es: (${string1.length > string2.length ? string1 : string2})`;
}

console.log(stringLarge(string1, string2));


console.log('---------- ejercicio 6 ----------');

let stringDosPalabras = 'Programación JavaScript';

function wordLongest(frase) {
	let words = frase.split(' ');
	return words[0] > words[1] ? words[0] : words[1];
}

console.log(`Del string (${stringDosPalabras}) de dos palabras, la palabra más larga es: ${wordLongest(stringDosPalabras)}`);
