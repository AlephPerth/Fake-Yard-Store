const mailMenu = document.querySelector('.navbar-email'); // Donde hago click
const desktopMenu = document.querySelector('.desktop-menu'); //Que se despliega
const hambMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.cart');
const shopCartMenu = document.querySelector('.shopping-cart-detail');
const productDetail = document.querySelector('.product-detail');

let productDetailAside = null;
let productsCards = null;
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

//Mail menu
mailMenu.addEventListener('click', () => {
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetail.classList.contains('inactive')

    if(!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
})

//Mobile menu
hambMenu.addEventListener('click', () => {
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive') // CartMenu tiene el class inactive
    const isProductDetailClosed = productDetail.classList.contains('inactive') // ProductDetail tiene la class inactive

    if(!isShopCartMenuClosed) { //Si Cartmenu NO tiene la class inactive
        shopCartMenu.classList.add('inactive'); // Agregarle la class inactive
    } else if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
})

//Cart menu
cartMenu.addEventListener('click', () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    shopCartMenu.classList.toggle('inactive');
})

productArr.forEach((Product) => {

productsCards =
`
<div class="product-card">
    <img src='${Product.img}' alt='productPicture' onclick='productDetailOpen()'>
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
document.querySelector('.cards-container').innerHTML += productsCards
})

for (let i = 0; i < productArr.length; i++) { //Comparar I vs valor de posición seleccionada del arr
    let product = productArr[i];

productDetailAside = 
`
<div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" onclick='productDetailCloses()'>
    </div>
        <img src="${product.img}" alt="bike"">
    <div class="product-info">
        <p>${product.cost}</p>
        <p>${product.nameproduct}</p>
        <p> Blablablablablablablabla </p>
    <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
    </button>
</div>
`
}

document.querySelector('.product-detail').innerHTML = productDetailAside

let productDetailCloses = () => {
    productDetail.classList.add('inactive')
}

let productDetailOpen = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShopCartMenuClosed = shopCartMenu.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive')
    }

    productDetail.classList.remove('inactive')
}

