// Simple function
function fruits() {
  return 'apple'
}


function phal(): string {
  return 'banana'
}
function color(): boolean {
  return true
}

function cal() : number{
  return 29
}

function simple(){
  // void
}

function complex(): number | string | boolean{
  let data= 10
  let user = 'tybans'
  let type = 'age'

  if(type == 'age') {
    return data
  }
  else{
    return user
  }

}


function complex2(): any{
  let data= 10
  let user = 'tybans'
  let type = 'age'

  if(type == 'age') {
    return data
  }
  else{
    return user
  }

}