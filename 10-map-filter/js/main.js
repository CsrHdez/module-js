let numbersArray = [2,6,7,10,5];

let doubleNumber = numbersArray.map( number => number * 2 );

console.log(numbersArray);
console.log(doubleNumber);

let numerosPares = numbersArray.filter(number => number % 2 === 0);

console.log(numerosPares);
