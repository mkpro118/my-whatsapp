const btn = document.querySelector('#login-btn')

btn.addEventListener('click', event => {
    username = document.querySelector('#username').value
    password = document.querySelector('#password').value

    if (username === '' || password === '') {
        alert("You've not provided proper credentials")
        return false
    }

    const request_url = `${window.location.origin}/login_user/${username}&${password}`

    fetch(request_url)
    .then(res => res.json())
    .then(data => {
        if (data.successful) {
            window.location = `${window.location.origin}/${data.next}`
        } else {
            if (data.username_valid) {
                document.querySelector('.password-error').style.visibility = 'visible'
            }
            else {
                document.querySelector('.username-error').style.visibility = 'visible'
            }
        }
    })
})
