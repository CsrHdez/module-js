console.log('---------- functions js ----------');
console.log('---------- definición ----------');
console.log('function name(parametroUno, parametroDos) {');
console.log('   // Code ...');
console.log('}');
console.log('---------- Invocación ----------');
console.log('name(parametroUno, parametroDos)');

// Definicón de la función
function sumaDeDosNumeros(numberOne, numberTwo) {
    let suma = numberOne + numberTwo;

    return suma;
}

// Invocación de la funcion
console.log(sumaDeDosNumeros(10, 15));
console.log(sumaDeDosNumeros(64, 4));


function evaluarSiEsMayor(num1, num2) {
    return num1 > num2 ? "El primero es mayor" : "Es segundo es mayor o igual";
}

console.log(evaluarSiEsMayor(15, 10));
