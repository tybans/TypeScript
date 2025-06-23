// By default it's public
// 

class Product2{
  public name: string;
  private price: number;
  private pId: number
  inCart = false
  isOrdered = false

  constructor(name: string, price: number, pid: number){
    this.name=name
    this.price=price
    this.pId = pid
  }
  // Now this addToCart function can not be accessed outside the class
  private addToCart(): void {
    this.inCart = true
  }
  // Now it is accessible in this class and it's child class, not outside the class
  protected buyProduct(): string{
    if(this.inCart){
      return `product ${this.name} is ordered in ${this.price}`
    }
    else{
      return `no product in cart`
    }
    
  }
}

class Order extends Product2{
  constructor() {
    super('laptop', 60000, 31)
  }

  getPrice() {
    return this.price
  }
}

var order = new Order()
console.log(order.getPrice());


var product2 = new Product2('Samsung', 120000, 101)
// var product = new Product('Oppo', 32000, 103)
product2.addToCart()
console.log(product2.buyProduct());


var product2 = new Product2('Oppo', 32000, 103)
product2.addToCart()
console.log(product2.buyProduct());

