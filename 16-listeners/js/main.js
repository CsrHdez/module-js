const btnDecrementar = document.querySelector('#btn-restar')
const btnIncrementar = document.querySelector('#btn-sumar')
const counter = document.querySelector('#counter')
let number = 0

btnDecrementar.addEventListener('click', () => counter.textContent = number--)
btnIncrementar.addEventListener('click', () => counter.textContent = number++)

// const btns = document.querySelectorAll('.btn-test')
// btns.forEach( btn => {
//     btn.addEventListener('click', (event) => {
//         let id = event.target.id
//         id == 'btn-restar' ? counter.textContent = number--
//                             : counter.textContent = number++
//     })
// } )