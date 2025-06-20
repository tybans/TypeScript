var sym = Symbol();
var sym2 = Symbol();
// Symbols are unique and immutable
// Even if they have the same description, they are not equal
console.log(sym === sym); // true
console.log(sym2 === sym2); // true

var sym3 = Symbol('description');
var sym4 = Symbol('description');
// Even if they have the same description, they are not equal
console.log(sym3 === sym4); // false

console.log(sym === sym2); // false
console.log(sym);
console.log(sym2);


const dId = Symbol('id')

const obj = {
  [dId]: 100,
  name: "tybans"
}
console.log(obj[dId]);
