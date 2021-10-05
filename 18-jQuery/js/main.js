$("#save-user").click(() => {
    console.log('Click desde Jquery')
})

$('#toggle-text').click(() => {
    $('#text').toggle()
})

$('.btn.btn-secondary').click((e) => {
    console.log(e.target.dataset.deleteClass)
    let classDelete = e.target.dataset.deleteClass
    $(`p.${classDelete}`).remove()
})