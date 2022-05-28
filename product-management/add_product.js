function addProduct() {
    let data = JSON.parse(localStorage.getItem('DataProduct')) ? JSON.parse(localStorage.getItem('DataProduct')) : [];
    let products = new Product(idproduct, image, name, price, type, quantity)
    products.idproduct = document.getElementById("idproduct").value;
    products.image = document.getElementById("image").value;
    products.name = document.getElementById("name").value;
    products.price = document.getElementById("price").value;
    products.type = document.getElementById("type").value;
    products.quantity = document.getElementById("quantity").value;
    if (!data) {
        data = [];
    }
    data.push(products);
    localStorage.setItem('DataProduct', JSON.stringify(data));
    showProduct();
}