const getData = () => {
    let mentors
    $.ajax({
        method: "GET", 
        url: "https://api-13va-default-rtdb.firebaseio.com/cesar/mentors.json",
        success: (response)=> {
            mentors = response
        },
        error: error => {
            alert('Ocurrio un error')
        },
        async: false
    })
    return mentors
}

const createMentor = (mentorObject) => {
    $.ajax({
        method: "POST", 
        url: "https://api-13va-default-rtdb.firebaseio.com/cesar/mentors.json",
        data: JSON.stringify(mentorObject),
        success: (response)=> {
            alert('Todo salio bien')
        },
        error: error => {
            alert('Ocurrio un error')
        },
        async: false
    })
}

const deleteMentor = id => {
    $.ajax({
        method: "DELETE", 
        url: `https://api-13va-default-rtdb.firebaseio.com/cesar/mentors/${id}.json`,
        success: (response)=> {
            alert('Todo salio bien')
        },
        error: error => {
            alert('Ocurrio un error')
        },
        async: false
    })
}

const getDataForm = form => {
    let mentorKoder = {}
    $(form + ' input.form-control').each(function(index) {
        mentorKoder[this.name] = $(this).val()
    })
    $(form)[0].reset()
    return mentorKoder
}

const renderCardsMentors = mentorsObj => {
    let res = ''
    for(key in mentorsObj){
        const {name, phone, gitUser, urlGitHub} = mentorsObj[key]
        res += `
        <div class="col">
                  <div class="card">
                      <div class="card-header">
                          <h5 class="card-title">${name}</h5>
                      </div>
                      <div class="card-body">
                          <p class="card-text">${phone}</p>
                          <a href="${urlGitHub}" class="card-link" target="_blank">${gitUser}</a>
                      </div>
                      <div class="card-footer d-flex justify-content-between">
                          <button class="btn btn-danger btn-delete-mentor" data-id-mentor="${key}">Eliminar</button>
                          <button class="btn btn-info text-white" data-id-mentor="${key}">Editar</button>
                      </div>
                  </div>
              </div>`
    }
    $("#cards-mentors").empty()
    $("#cards-mentors").append(res)
    $('.btn-delete-mentor').click( e => {
        deleteMentor(e.target.dataset.idMentor)
        renderCardsMentors( getData() )
    })
}

$('#form-create-mentor').submit( event => {
    event.preventDefault()
    createMentor( getDataForm("#form-create-mentor") )
    renderCardsMentors( getData() )
})

renderCardsMentors( getData() )