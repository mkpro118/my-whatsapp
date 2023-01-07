const email_field = document.querySelector('#email')

let timer2

email_field.addEventListener('keyup', event => {
    clearTimeout(timer2)
    if (email_field.value) {
        timer2 = setTimeout(validate_email, 500);
    }
})

function validate_email() {
    const valid = email_field.checkValidity()
    const error = document.querySelector('small.email-error')
    if (valid) {
        error.innerText = 'Invalid Email'
        error.style.visibility = 'hidden'
    }
    else {
        error.innerText = 'Invalid Email'
        error.style.visibility = 'visible'
        return
    }
    const email = email_field.value
    const request_url = `${window.location.origin}/check_email_availablility/${email}`
    fetch(request_url)
    .then(res => res.json())
    .then(data => {
        const taken = data.taken
        const error = document.querySelector('small.email-error')
        if (taken) {
            error.innerText = 'Email is already in use'
            error.style.visibility = 'visible'
        }
        else {
            error.innerText = 'Email is already in use'
            error.style.visibility = 'hidden'
        }
    })
}
