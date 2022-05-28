let data = JSON.parse(localStorage.getItem('DataProduct'));
let cartBtn = document.querySelector('.shop-cart');  
function showCartShop(){
    modal.classList.add('open')
}
cartBtn.addEventListener('click', showCartShop);


let modal = document.querySelector('.js-modal');
let closeBtn = document.querySelector('.js-close-btn')
function closeCartShop(){
    modal.classList.remove('open')
}
closeBtn.addEventListener('click', closeCartShop);
showProduct();
