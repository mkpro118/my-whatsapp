const strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
const medium = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

const pswd_field = document.querySelector('#password')
const pswd_strength_badge = document.querySelector('#password-strength')

pswd_field.addEventListener('input', event => {
    pswd_strength_badge.style.visibility = 'visible'
    const pswd = pswd_field.value
    checkStrength(pswd)
})



function checkStrength(pswd){
    if (pswd === '') {
        pswd_strength_badge.style.visibility = 'hidden'
    }

    if(strong.test(pswd)) {
        pswd_strength_badge.innerText = 'Strong'
        pswd_strength_badge.style.color = 'hsl(125, 80%, 50%)'
    } else if(medium.test(pswd)){
        pswd_strength_badge.innerText = 'Medium'
        pswd_strength_badge.style.color = 'yellow'
    } else{
        pswd_strength_badge.innerText = 'Weak'
        pswd_strength_badge.style.color = 'red'
    }
}
