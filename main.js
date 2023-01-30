const mailMenu = document.querySelector('.navbar-email') // Donde clickeo
const desktopMenu = document.querySelector('.desktop-menu') // Ventana que aparece

const hambMenu = document.querySelector('.hamburguer')
const mobileMenu = document.querySelector('.mobile-menu')

const cart = document.querySelector('.cart')
const productDetail = document.querySelector('.product-detail')

cart.addEventListener('click', toggleShoppingCart)
mailMenu.addEventListener('click', toggleDesktopMenu)
hambMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
        desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    productDetail.classList.toggle('inactive')
}