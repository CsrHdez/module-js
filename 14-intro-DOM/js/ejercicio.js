let mentorsArray = [
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
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
            {
                signature:  "HTML",
                score: 10
            },
        ]
    }
]

class Koder {
    constructor ({name, scores}) {
        this.name = name
        this.scores = scores
        this.average = this.promedio()
    }

    promedio () {
        return this.scores.reduce((accum, signature) => accum + signature.score , 0) / this.scores.length
    }
}

class RenderKoders {
    constructor(koders) {
        this.koders = koders
        this.allSignatures = this.signatures()
    }

    render () {
        return this.tHead() + this.tBody() + this.tFoot()
    }

    signatures () {
        return this.koders.reduce((signatures, koder) => {
            koder.scores.forEach(signature => {
                if (!signatures.includes(signature.signature))
                    signatures = [...signatures, signature.signature]
            })
            return signatures
        }, [])
    }

    tHead () {
        return `
                <thead>
                    <tr>
                        <th>Nombre</th>
                        ${this.thSignatures()}
                        <th>Promedio</th>
                    </tr>
                </thead>
                `
    }

    thSignatures () {
        return this.allSignatures.reduce((accum, signature) => `${accum}\n<th>${signature}</th>`,'')
    }

    tBody () {
        return `
                <tbody>
                    ${this.trKoders()}
                </tbody>
                `
    }

    trKoders () {
        return this.koders.reduce((accum, koder) => {
            return `
                    ${accum}
                    <tr>
                        <td>${koder.name}</td>
                        ${this.tdScoreSignature(koder.scores)}
                        <td>${koder.average}</td>
                    </tr>
                    `
        }, '')
    }

    tdScoreSignature (signatures) {
        return this.allSignatures.reduce((accum, signature) => {
            return `
                    ${accum}
                    <td>
                        ${signatures.filter(score => score.signature === signature)[0].score}
                    </td>
                    `
        }, '')
    }

    tFoot () {
        return `
                <tfoot>
                    <tr>
                        <td colspan="${this.allSignatures.length + 1}">Promedio General<td>
                        <td>${this.generalAverage()}</td>
                    <tr>
                </tfoot>
                `
    }

    generalAverage () {
        return this.koders.reduce((accum, koder) => accum + koder.average, 0) / this.koders.length
    }
}

let koderObjectCollection = mentorsArray.map(mentor => new Koder(mentor))

let renderKoder = new RenderKoders(koderObjectCollection)

console.log(renderKoder.render())
