let kodersArray = []

const inpts = document.querySelectorAll('form input.form-control')
const btnForm = document.querySelector('form button[type="submit"]')

btnForm.addEventListener('click', event => {
    event.preventDefault()
    let objKoder = {}
    inpts.forEach(element => objKoder = {...objKoder, [element.id]: element.value})
    kodersArray.push(objKoder)
    event.target.parentNode.parentNode.reset()
})