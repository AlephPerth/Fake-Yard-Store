const mailMenu = document.querySelector('.navbar-email'); // Donde hago click
const desktopMenu = document.querySelector('.desktop-menu'); //Que se despliega
const hambMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.cart');
const shopCartMenu = document.querySelector('.shopping-cart-detail');

mailMenu.addEventListener('click', toggleDesktopMenu);
hambMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleShopCartMenu);

class Product {
    constructor (img, cost, nameproduct ) {
        this.img = img
        this.productimg = new Image()
        this.productimg.src = img
        this.cost = cost
        this.nameproduct = nameproduct
    }
}

const bike = new Product("https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "$120,00", "Bike" )

function toggleDesktopMenu() {
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')

    if(!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')

    if(!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shopCartMenu.classList.toggle('inactive');
}

let templateTest = null;

templateTest =

`
<div class="product-card">
    <img src='${bike.img}' alt="Bike">
    <div class="product-info">
    <div>
        <p>'${bike.cost}'</p>
        <p>'${bike.nameproduct}'</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div>
`

document.querySelector('.cards-container').innerHTML = templateTest