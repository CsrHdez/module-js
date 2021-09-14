let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]

const arrayMentor = [
    /*{
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },*/
]

for (let i = 0; i < dataArray.length; i++) {
    arrayMentor.push({name: dataArray[i][0], lastName: dataArray[i][1]});
}

dataArray.forEach(mentor => arrayMentor.push(name: mentor[0], lastName: mentor[1]));


console.log(arrayMentor);
