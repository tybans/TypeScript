// type UserData33 = {
//   mobile: number,
//   id: number,
//   marks: number,
//   age: number
// }



// type UserData33 = {
//   [key:string]: number | string
// }


type UserData33 = {
  // Mandotory keys
  id: number
  name: string
  mobile: number
  // [key:string]: number | string  // This works fine, but we can add as much keys as we want from outside
  readonly [key:string]: number | string  // This prevents adding extra keys
}


var userData33: UserData33 = {
  id: 12,
  name: 'tybans',
  mobile: 99999999,
  marks: 84,
  age: 23,
  
}

// userData33.city = "BKSC" // We can not add city key to the type UserData33, as because it is readonly
