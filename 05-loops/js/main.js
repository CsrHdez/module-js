let str = 'kOdeMia';
let lengthStr = str.length;

let result = '';

for(let index = 0; index < lengthStr; index++) {
    if(index % 2 ===  0) {
        result += str.charAt(index).toUpperCase();
    } else {
        result += str.charAt(index).toLowerCase();
    }
}

console.log('Input: ', str);
console.log('Output: ', result);
