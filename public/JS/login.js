let email = null;
let password = null;
let access = document.querySelector('.login-button')

access.addEventListener('click', () => {

    email = document.querySelector('.input-email').value;
    password = document.querySelector('.input-password').value;

    if (email == 'lunalovegood@hogwarts.uk' && password == 'Dissendio') {
            window.location.href = './main-page.html'
    } else if 
        (email == 'albusdumbledore@hogwarts.uk' && password == 'LemonCandy') {
            window.location.href = './main-page.html'
    } else {
        console.error('You shaw dont pass!')
        console.info('lunalovegood@hogwarts.uk')
        console.info('Dissendio')
    }
})