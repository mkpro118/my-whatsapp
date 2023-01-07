const username_field = document.querySelector('#username')

let timer

username_field.addEventListener('keyup', event => {
    username_field.value = username_field.value.trim()
    for (let k of '`\'!@#$%^&*()"') {
        if (username_field.value.slice(-1) === k) {
            username_field.value = username_field.value.slice(0, -1)
        }
    }
    clearTimeout(timer)
    if (username_field.value) {
        timer = setTimeout(check_availability, 600);
    }
})

function check_availability() {
    const username = username_field.value
    const request_url = `${window.location.origin}/check_username_availablility/${username}`
    fetch(request_url)
    .then(res => res.json())
    .then(data => {
        const taken = data.taken
        if (taken) {
            document.querySelector('small.username-error').style.visibility = 'visible'
        }
        else {
            document.querySelector('small.username-error').style.visibility = 'hidden'
        }
    })
}
