['#password',
'#password-repeat'].forEach(e => {
    let btn = document.querySelector(`${e}-btn-overlay`)
    if (btn) {
        btn.addEventListener('click', show_password)
    }
})


function show_password(event) {
    event.stopPropagation()
    event.target.removeEventListener('click',show_password)
    event.target.addEventListener('click', hide_password)
    let id = event.target.dataset.field
    let pswd_field = document.querySelector(`#${id}`)
    pswd_field.type = 'text'
    let line = pswd_field.nextElementSibling.firstElementChild.firstElementChild
    line.style.display = 'none'
}

function hide_password(event) {
    event.stopPropagation()
    event.target.removeEventListener('click',hide_password)
    event.target.addEventListener('click', show_password)
    let id = event.target.dataset.field
    let pswd_field = document.querySelector(`#${id}`)
    pswd_field.type = 'password'
    let line = pswd_field.nextElementSibling.firstElementChild.firstElementChild
    line.style.display = 'block'
}
