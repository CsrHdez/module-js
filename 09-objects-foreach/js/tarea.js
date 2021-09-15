let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]
/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)
- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

let scoresArray = [];
mentorArray.forEach(mentor => scoresArray = scoresArray.concat(mentor.scores));
console.log(scoresArray);

let totalScore = 0;
let signatureFilter = [];
signatureFilter = scoresArray.filter(signature => signature.signature == 'HTML')
signatureFilter.forEach(signature => totalScore += signature.score)
console.log(totalScore/signatureFilter.length)

totalScore = 0;
signatureFilter = scoresArray.filter(signature => signature.signature == 'CSS')
signatureFilter.forEach(signature => totalScore += signature.score)
console.log(totalScore/signatureFilter.length)

totalScore = 0;
signatureFilter = scoresArray.filter(signature => signature.signature == 'JS')
signatureFilter.forEach(signature => totalScore += signature.score)
console.log(totalScore/signatureFilter.length)

// Promedio individual

mentorArray.forEach(mentor => {
  totalScore = 0;
  mentor.scores.forEach(signature => totalScore += signature.score);
  mentor.promedio = totalScore/mentor.scores.length;
  console.log(`El promedio de ${mentor.name} es ${mentor.promedio}`)
});

// Crear un array de string con la siguiente forma

const arrString = [];
mentorArray.forEach(mentor => arrString.push(`Mi nombre es ${mentor.name} y mi promedio es ${mentor.promedio}`) );

// Obtener la lista de mentores cuyo promedio sea mayor a 9.5

console.log( mentorArray.filter(mentor => mentor.promedio > 9.5) );
