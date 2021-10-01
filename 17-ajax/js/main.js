const xhr = new XMLHttpRequest()

console.log(xhr)

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4){
        console.log(xhr.status)
        console.log('Response: ')
        console.log(xhr.response)
        console.log('ResponseText: ')
        console.log(xhr.responseText)
        console.log(JSON.parse(xhr.responseText))
        printList(JSON.parse(xhr.responseText))
    }
})

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

xhr.send()

const typeNodes = {html: 'createElement', text: 'createTextNode'}
function createNode (typeNode, element, child) {
    const el = document[typeNodes[typeNode]](element)
    child ? el.appendChild(child) : null
    return el
}

const printList = userArr => {
    const ol = document.querySelector('#list-user')
    userArr.forEach(user => {
        const { name, website } = user
        const li = createNode('html', 'li', 
            createNode('text', `Nombre: ${name} - Website: ${website}`)
        )
        ol.appendChild(li)
    })
}