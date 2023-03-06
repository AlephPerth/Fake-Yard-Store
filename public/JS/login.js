
const access = document.querySelector('.login-button')
let email = null;
let password = null;
let mail_acount = null;

access.addEventListener('click', () => {

    email = document.querySelector('.input-email').value;
    password = document.querySelector('.input-password').value;

    if (email == 'lunalovegood@hogwarts.uk' && password == 'Alohomora') {
            window.location.href = './main-page.html'
    } else if 
        (email == 'albusdumbledore@hogwarts.uk' && password == 'LemonCandy') {
            window.location.href = './main-page.html'
    } else {

        incorrectPasswd = `Es a-lo-jo-MÓ-ra, no a-lo-jo-mo-RÁ!`

        document.querySelector('.notPass').innerHTML = incorrectPasswd
    }
})