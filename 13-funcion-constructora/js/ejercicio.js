const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Mauro', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]
/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
- Prototipo de tipo koder
Obtener la edad a partir de la fecha de nacimiento
Obtener promedio de sus scores
Colección de Koder que pertenezcan a JavaScript
Colección de Koder que pertenezcan a Python
*/

function Koder ({name,lastName,birthday,generation,bootcamp,scores}) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.generation = generation;
    this.bootcamp = bootcamp;
    this.scores = scores;
};
Koder.prototype.edad = function () {
    const [year, month, day] = this.birthday.split('/');
    let hoy = new Date();
    let edad = hoy.getFullYear() - year;
    let m = hoy.getMonth() - month;

    if (m < 0 || (m === 0 && hoy.getDate() < day)) {
        edad--;
    }

    return edad;
};
Koder.prototype.promedio = function () {
    return this.scores.reduce((accum, module) => accum + module.score, 0) / this.scores.length;
}

let kodersCollectionTypeKoder = kodersCollection.map(koder => new Koder(koder));

console.log(kodersCollectionTypeKoder[0].promedio());

let filterBootcamp = (arrKoders, bootcamp) => arrKoders.filter(koder => koder.bootcamp === bootcamp);

console.log(filterBootcamp(kodersCollectionTypeKoder, 'JavaScript'));
console.log(filterBootcamp(kodersCollectionTypeKoder, 'Python'));