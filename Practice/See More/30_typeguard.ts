let userData20: number | string | boolean = 'tybans'
userData20 = true

// typeof method
if(typeof userData20 == "boolean") {
  console.log("This is boolean DT");
  
}
else if (typeof userData20 == "string"){
  console.log("This is string DT");
  
}
else{
  console.log("This is number DT");
  
}


class Product21{

}
var p21 = new Product21()

class Order21{

}

var o21 = new Order21()

function checkDetails(data: Product21 | Order21) {
  if (data instanceof Product21) {
    console.log("Product21 DT");
    
  }
  else{
    console.log("Order21 DT");
    
  }
}

checkDetails(o21)
