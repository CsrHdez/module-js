

const arrayFruit = [
    'banana',
    'fresa',
    'naranja',
    'chicozapote',
    'banana',
    'pera',
    'pera',
    'naranja'
];

const result = arrayFruit.reduce((accum, fruit, index) => {
    let count = accum[fruit] ? accum[fruit] + 1 : 1;
    return {
        ...accum,
        [fruit]: count,
    }
}, {})