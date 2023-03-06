const mailMenu = document.querySelector('.navbar-email'); // Donde hago click
const desktopMenu = document.querySelector('.desktop-menu'); //Que se despliega
const hambMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.cart');
const shopCartMenu = document.querySelector('.shopping-cart-detail');
const productDetail = document.querySelector('.product-detail');

let item = 0;
let total = 0;
let unit = 1;
let cost = null;
let productDetailAside = null;
let productsCards = null;
let productArr = [] 

class Product {
    constructor (img, cost, nameproduct, category ) {
        this.img = img
        this.productimg = new Image()
        this.productimg.src = img
        this.cost = cost
        this.nameproduct = nameproduct
        this.category = category
    }
}

const jersei = new Product("https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 120.00, "Jersei", "clothes" )
const couch = new Product("https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 100.00, "Couch", "electronics")
const computer = new Product("https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1600", 250.00, "Computer", "furnitures" )
const unicorndoll = new Product("https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 80.00, "Unicorn doll", "toys" )
const books = new Product("https://images.pexels.com/photos/14454202/pexels-photo-14454202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 50.00, "Lot books", "others")

productArr.push(jersei, couch, computer, unicorndoll, books)

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
<div class="product-card" id='${Product.category}'>
    <img src='${Product.img}' alt='productPicture' class='img-main-page' onclick='productDetailOpen()'>
    <div class="product-info">
    <div>
        <p>$${Product.cost}</p>
        <p>'${Product.nameproduct}'</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="cartIcon" onclick='addItem()' class='addToCard'>
    </figure>
    </div>
</div>
`
document.querySelector('.cards-container').innerHTML += productsCards
})

let addItem = () => {

    if (item == 0) {
    item++
    itemAdded = `${item}`
    document.querySelector('.items').innerHTML = itemAdded

    myOrder =

    `<div class="my-order-content">
        <div class="shopping-cart">
            <figure>
                <img src='${books.img}' alt='${books.nameproduct}'>
            </figure>
        <p>${books.nameproduct}</p>
        <p>$${books.cost}</p>
                <button class='btnAdd' onclick='addUnits()'>+</button>
                <button class='btnRem' onclick='remUnits()'>-</button>
        <p>Units:</p>
        <div class='units' id='${books.nameproduct}'>1</div>
                <img src="./icons/icon_close.png" alt="close" onclick='removeItem()'>
    </div>`

    document.querySelector('.shoppingCart').innerHTML += myOrder

    cost = books.cost
    total = `$${cost}`
    document.querySelector('.total').innerHTML = total

} else {
        let addUnitsInernalFunction = () => {

            unit++
            unitsAded = `${unit}`
            document.querySelector('.units').innerHTML = unitsAded
        
            item++
            itemAdded = `${item}`
            document.querySelector('.items').innerHTML = itemAdded

            cost = books.cost*item
            total = `$${cost}`
            document.querySelector('.total').innerHTML = total
        }
            return addUnitsInernalFunction()
    }
}

let addUnits = () => {

    unit++
    unitsAded = `${unit}`
    document.querySelector('.units').innerHTML = unitsAded

    item++
    itemAdded = `${item}`
    document.querySelector('.items').innerHTML = itemAdded

    cost = books.cost*item
    total = `$${cost}`
    document.querySelector('.total').innerHTML = total
}

let remUnits = () => {

        if (unit > 0 && item > 0) {
        unit--
        unitsAded = `${unit}`
        document.querySelector('.units').innerHTML = unitsAded

        item--
        itemAdded = `${item}`
        document.querySelector('.items').innerHTML = itemAdded

        } else {
    }
}

let removeItem = () => {

}

for (let i = 0; i < productArr.length; i++) { //Comparar I vs valor de posición seleccionada del arr
    let product = productArr[i];

productDetailAside = 
`
<div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" onclick='productDetailCloses()'>
    </div>
        <img src="${product.img}" alt='${product.nameproduct} class='product'>
    <div class="product-info">
        <p>$${product.cost}</p>
        <p>${product.nameproduct}</p>
        <p>A lot of old and mysterious books...That is a Necronomicon?</p>
        <button class="primary-button add-to-cart-button" onclick='addItem()'>
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

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isShopCartMenuClosed) {
        shopCartMenu.classList.add('inactive')
    }
        productDetail.classList.remove('inactive')
}