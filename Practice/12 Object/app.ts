// Simple Object
// var userData = {
//   name: 'tybans',
//   age: 30,
//   city: "BKSC"
// }

var userData: { name: string, age: number, city: string } = {
  name: 'Taiyab',
  age: 31,
  city: 'BKSC'
}
userData.name = 'Ansari'
console.log(userData);

// userData.company= 'HCL'  Error , so for that

var hcl: {
  [key: string]: string | number | undefined
} = {
  name: 'Abhishek',
  age: 30
}
hcl.company = "HCL"
hcl.city = "Noida"
console.log(hcl);


// Nested object


var userData2: { name: string, age: number, address: {
  Hno: string, sector: number, city: string
} } = {
  name: 'Taiyab',
  age: 31,

  address: {
    Hno: 'House No 53',
    sector: 70,
    city: 'BKSC',

  }
}