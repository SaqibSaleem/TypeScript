class Products {
    AddCart(name, price, quantity) {
        this.Name = name;
        this.Price = price;
        this.Quantity = quantity;
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart && this.Quantity > 0) {
            this.isOrdered = true;
            return `You have successfully ordered ${this.Name} Quantity ${this.Quantity} for $${this.Price * this.Quantity}. `;
        }
        else {
            console.log("Product is not in cart or out of stock.");
        }
    }
}
let product = new Products();
product.Name = "Laptop";
product.Price = 500;
product.Quantity = 5;
product.AddCart(product.Name, product.Price, product.Quantity);
console.log(product.buyProduct());
