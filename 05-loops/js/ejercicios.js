console.log('---------- Ejercicio 1 ----------');

console.log('---------- Ejercicio 2 ----------');

let num = 0;
do {
    num = parseInt(prompt('Escribe un número entre 1 y 10'));
} while(num <= 0 || num > 10)
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num*1}`);
}

console.log('---------- Ejercicio 3 ----------');

num = 0;
do {
	num = prompt('Escribe un número entre 10 y 100: ');
} while(num < 10 || num > 100);
for(let i = 1; i <= num; i++) {
	if(i%2 === 0) {
		console.log(i);
	}
}


console.log('---------- Ejercicio 4 ----------');

let cantidad = 1416;
let cantidadStr = cantidad.toString();
let result = 0;
for(let i = 0; i < cantidadStr.length; i++) {
	result += parseInt(cantidadStr[i]);
}
console.log(result);

console.log('---------- Ejercicio 5 ----------');

for(let i = 1; i <= 10; i++) {
    console.log('*'.repeat(i));
}

console.log('---------- Ejercicio 6 ----------');

result = 0;
for(let i = 1; i <= 1000; i++) {
	if(i%3 === 0 || i%5 === 0) {
		result += i;
	}
}
console.log(result);

console.log('---------- Ejercicio 7 ----------');

let cadena = 'Hola como estas';
let cadArr = cadena.split(' ');
let newCad = '';
for(let i = 0; i < cadArr.length; i++) {
	if(i === 0) {
		newCad += cadArr[i].substring(0,1).toLowerCase() + cadArr[i].substring(1);
	} else {
		newCad += cadArr[i].substring(0,1).toUpperCase() + cadArr[i].substring(1);
	}
}
console.log(newCad);

console.log('---------- Ejercicio 8 ----------');

let arrNum = [];
result = 0;
do {
	arrNum.push(prompt(`Escriba un número: (le faltan ${10 - arrNum.length})`));
} while(arrNum.length < 10)
for(let i = arrNum.length-1; i >= arrNum.length - 5; i--) {
	result += parseInt(arrNum[i]);
}
console.log(result);
