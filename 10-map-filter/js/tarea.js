/* Ejercicio: */
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]
/*
- Agrupar el nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/


/* Agrupar nombres de las bandas, que no esten repetidas */
let bands = arr => {
    let bands = [];
    arr.forEach(item => !bands.includes(item.band) ? bands.push(item.band) : null );
    return bands;
}

console.log(bands(songsData));

/* Agrupar las canciones por banda. */

let songsForBand = arr => {
    let songsForBand = [];
    bands(arr).forEach(band => {
        songsForBand.push({
            band,
            songs: arr.filter(item => item.band === band)
        });
    });
    return songsForBand
}

console.log(songsForBand(songsData));

/*
- La cancion con más reproducciones
- La cancion con más likes
*/

let forStatistics = (arr, param) => { return arr.reduce((lastItem, currentItem) => currentItem.statistics[param] >= lastItem.statistics[param] ? currentItem : lastItem); }

console.log(forStatistics(songsData, 'reproductions'));

console.log(forStatistics(songsData, 'likes'));
