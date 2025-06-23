function totalPrice() {
  var price = 100
  var item = 50
  console.log(price * item);

}
totalPrice()

function totalPrice1(item: number, price: number, text?: string) {
  // var price = 100

  if (text) {
    console.log(text
      + price * item);
  }
  else {
    console.log(price * item);
  }
}
totalPrice1(50, 100, 'the total amount is ')
totalPrice1(50, 100,)



function simpl(data: string | number | boolean | any) {
  console.log(data);

}

simpl(10)
simpl('tybans')
simpl(true)
simpl('abc')