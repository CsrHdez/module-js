// let xhr = XMLHttpRequest()

// xhr.addEventListener('')

// xhr.open("METHOD", "url", true)

// xhr.send()

$.ajax({
    method: "POST",
    url: "endpoint",
    data: JSON.stringify({}),
    success: response => {
        console.log(response)
    },
    error: error => {
        console.log(error)
    }
})