const pswd_field2 = document.querySelector('#password-repeat')


pswd_field2.addEventListener('input', event => {
    const match = checkMatch()
    if (!match) {
        document.querySelector('#password-match').style.visibility = 'visible'
    }
    else {
        document.querySelector('#password-match').style.visibility = 'hidden'
    }
})

function checkMatch() {
    return (pswd_field.value === pswd_field2.value)
}
