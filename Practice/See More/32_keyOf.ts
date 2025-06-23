type PersonT = {
  name: string,
  age: number,
  isEmp: boolean
}

let personData32: PersonT = {
  name:"tybans",
  age: 30,
  isEmp: true
}

// type PersonX = keyof PersonT // This also works
// let personDataX: PersonX

let personDataX:keyof PersonT

personDataX = "name"
personDataX = "age"
personDataX = "isEmp"
// personDataX = "tybans"  It will not take any other keys other than the ones which are declared in PersonT


// How to use object keys with typeOf
let userX: keyof typeof personData32 = "name"