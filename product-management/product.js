class Product {
    idproduct;
    image;
    name;
    quantity;
    type;
    price;
    constructor(idproduct, image, name, quantity, type, price) {
        this.idproduct = idproduct;
        this.image = image;
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.price = price;
    }
    getIdProductTest() {
        return this.idproduct;
    }
    setIdproduct(idproduct) {
        this.idproduct = idproduct;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getQuantity() {
        return this.quantity
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}