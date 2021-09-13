const koders = ['Kraken', 'Paco', 'Pablo', 'Toño', 'Cesar'];

const randomIndexKoder = array => Math.floor(Math.random() * array.length);

const printKoder = (idx, arr) => console.log(arr[idx]);

printKoder(randomIndexKoder(koders), koders);
