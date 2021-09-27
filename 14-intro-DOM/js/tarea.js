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

Object.prototype.valueOf = function (callback) {
    for(let key in this) callback(key, this[key])
}

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
    constructor (koders) {
        this.koders = koders
        this.allTHeaders = ['Nombre', ...this.allSignatures(), 'Promedio']
        this.allTHProperty = ['name', ...this.allSignatures(), 'average']
        this.allTFooters = [ {text: 'Promedio', att: { colspan: this.allSignatures().length +1  }}, 
            { text: this.generalAverage() } ]
        this.typeNodes = {html: 'createElement', text: 'createTextNode'}
    }

    allSignatures () {
        return this.koders.reduce((signatures, koder) => {
            koder.scores.forEach(signature => {
                if (!signatures.includes(signature.signature))
                    signatures = [...signatures, signature.signature]
            })
            return signatures
        }, [])
    }

    generalAverage () {
        return this.koders.reduce((accum, koder) => accum + koder.average, 0) / this.koders.length
    }

    createNode (typeNode, element, child) {
        const el = document[this.typeNodes[typeNode]](element)
        child ? el.appendChild(child) : null
        return el
    }

    tHead () {
        const tHead = this.createNode('html', 'thead')
        tHead.appendChild(this.tHeaders())
        return tHead
    }

    tHeaders () {
        const trHead = this.createNode('html', 'tr')
        this.allTHeaders.forEach(tHeader => {
            trHead.appendChild(this.createNode('html', 'th', this.createNode('text', tHeader)))
        })
        return trHead
    }

    tBody () {
        const tBody = this.createNode('html', 'tbody')
        this.koders.forEach(koder => {
            tBody.appendChild(this.tData(koder))
        })
        return tBody;
    }

    tData (koder) {
        const trBody = this.createNode('html', 'tr')
        this.allTHProperty.forEach(tHeader => {
            const td = this.createNode('html', 'td')
            koder[tHeader] ? trBody.appendChild(
                                this.createNode('html', 'td', this.createNode('text', koder[tHeader]))
                            )
                            : trBody.appendChild(this.tDataScore(tHeader, koder.scores))
        })
        return trBody
    }

    tDataScore (tHeader, signatures) {
        const td = this.createNode('html', 'td')
        signatures.forEach(signature => {
            if (signature.signature === tHeader) td.appendChild(this.createNode('text', signature.score))
        })
        return td
    }

    tFoot () {
        const tFoot = this.createNode('html', 'tfoot')
        const tr = this.createNode('html', 'tr')
        this.allTFooters.forEach(tdata => {
            let td = this.createNode('html', 'td', this.createNode('text', tdata.text))
            if (tdata.att) tdata.att.valueOf((key, value) => td.setAttribute(key, value))
            tr.appendChild(td)
        })
        tFoot.appendChild(tr)
        return tFoot
    }
}

let koderObjectCollection = mentorsArray.map(mentor => new Koder(mentor))
let renderKoder = new RenderKoders(koderObjectCollection)
let table = document.createElement('table')
table.setAttribute('class', 'table')
table.appendChild(renderKoder.tHead())
table.appendChild(renderKoder.tBody())
table.appendChild(renderKoder.tFoot())
document.body.appendChild(table)