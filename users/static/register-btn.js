const btn = document.querySelector('#register-btn')

btn.addEventListener('click', event => {
    const match = checkMatch()
    if (!match) {
        document.querySelector('#password-match').style.visibility = 'visible'
        return false
    }
    const strength = document.querySelector('#password-strength').innerText
    if (strength === 'Weak') {
        const ans = confirm("Are you sure you want this password? It's kinda weak!")
        if (!ans) {
            return false
        }
    }

    const all_inputs = document.querySelectorAll('input:not([id="password-strength"])')
    all_inputs.forEach(input => {
        if (input.value === '') {
            errorfield = input.dataset.errorfield
            document.querySelector(`.${errorfield}`).style.visibility = 'visible'
        }
    })

    const errors = document.querySelectorAll('small:not([id="password-strength"])')
    try{
        errors.forEach(err => {
            if (err.style.visibility === 'visible') {
                alert("You haven't filled all the fields correctly!" )
                console.log(err)
                throw 'error'
            }
        })
    }
    catch(err) {
        if (err === 'error') {
            return
        }
    }

    register()
})

function register() {
    username = username_field.value
    email = email_field.value
    password = pswd_field.value

    const request_url = `${window.location.origin}/register_user/${username}&${email}&${password}`

    console.log(request_url)

    fetch(request_url)
    .then(res => res.json())
    .then(data => {
        next = data.next
        window.location = `${window.location.origin}/${next}`
    })
}
