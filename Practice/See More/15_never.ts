// This function uses never, because it is running in a loop that never ends
function loopFunction(): never {
  while(true) {
    console.log('loop');
    
  }
}


function throww(): never {
  throw new Error("Throws error")
}


// We can not use never here beacause this function is excutable and it will reach to its endpoint
// function simple(): never {
//   console.log('simple');
  
// }
