let kodersArray = []

const inpts = document.querySelectorAll('form input.form-control')
const btnForm = document.querySelector('form button[type="submit"]')

btnForm.addEventListener('click', event => {
    event.preventDefault()
    let objKoder = {}
    inpts.forEach(element => objKoder = {...objKoder, [element.id]: element.value})
    kodersArray.push(objKoder)
    event.target.parentNode.parentNode.reset()
    renderTable(kodersArray)
})

const typeNodes = {html: 'createElement', text: 'createTextNode'}
function createNode (typeNode, element, child) {
    const el = document[typeNodes[typeNode]](element)
    child ? el.appendChild(child) : null
    return el
}

const removeKoder = e => {
    console.log(e.target.dataset.idx)
    kodersArray.splice(e.target.dataset.idx, 1)
    renderTable()
}

const renderTable = () => {
    const tBody = document.querySelector('#list-koder')
    tBody.innerHTML = ''
    kodersArray.forEach((koder, idx) => {
        const {name, lastName} = koder
        const tr = createNode('html', 'tr')
        
        const tdIndex = createNode('html', 'td', createNode('text', idx + 1))
        const tdName = createNode('html', 'td', createNode('text', name))
        const tdLastName = createNode('html', 'td', createNode('text', lastName))
        const tdButton = createNode('html', 'td')

        const button = createNode('html', 'button', createNode('text', 'Eliminar'))
        button.classList.add("btn", "btn-danger")
        button.setAttribute('data-idx', idx)
        button.addEventListener('click', removeKoder)

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}