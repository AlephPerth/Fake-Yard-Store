const mailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hambMenu = document.querySelector('img')
const mobileMenu = document.querySelector('.mobile-menu')

mailMenu.addEventListener('click', toggleDesktopMenu)
hambMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}