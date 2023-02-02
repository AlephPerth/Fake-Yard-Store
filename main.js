const mailMenu = document.querySelector('.navbar-email'); // Donde hago click
const desktopMenu = document.querySelector('.desktop-menu'); //Que se despliega
const hambMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.cart');
const shopCartMenu = document.querySelector('.shopping-cart-detail');

let templateTest = null;
let productArr = [] 

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
const monitor = new Product("https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "$100,00", "Monitor" )
const computer = new Product("https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1600", "$250,00", "Computer" )
const dumbbells = new Product("https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1600", "$80,00", "Dumbbells" )

productArr.push(bike, monitor, computer, dumbbells)

mailMenu.addEventListener('click', () => {

    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')

    if(!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
})

hambMenu.addEventListener('click', () => {
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')

    if(!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
})

cartMenu.addEventListener('click', () => {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shopCartMenu.classList.toggle('inactive');
})

productArr.forEach((Product) => {

templateTest =

`
<div class="product-card">
    <img src='${Product.img}' alt="productPicture">
    <div class="product-info">
    <div>
        <p>'${Product.cost}'</p>
        <p>'${Product.nameproduct}'</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="cartIcon">
    </figure>
    </div>
</div>
`
document.querySelector('.cards-container').innerHTML += templateTest

})