class Product{
  name: string;
  price: number;
  pId: number
  inCart = false
  isOrdered = false

  constructor(name: string, price: number, pid: number){
    this.name=name
    this.price=price
    this.pId = pid
  }
  addToCart(): void {
    this.inCart = true
  }
  buyProduct(): string{
    if(this.inCart){
      return `product ${this.name} is ordered in ${this.price}`
    }
    else{
      return `no product in cart`
    }
    
  }
}

var product = new Product('Samsung', 120000, 101)
// var product = new Product('Oppo', 32000, 103)
product.addToCart()
console.log(product.buyProduct());


var product = new Product('Oppo', 32000, 103)
product.addToCart()
console.log(product.buyProduct());

