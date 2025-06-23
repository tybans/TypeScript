// var personA: {name: string} = {
//   name: 'tybans'
// }

// var personB : {age: number}= {
//   age: 30
// }

// var personData: {name: string, age: number} = {
//   name: 'taiyab',
//   age: 31
// }

// Interaection

// type person_A = {name: string}
// type person_B = {age: number}

//  we can also use it as interface
interface person_A  {name: string}
interface person_B {age: number}
type person_Data = person_A & person_B

var personA: person_A = {
  name: 'tybans'
}

var personB : person_B= {
  age: 30
}

var personData: person_Data = {
  name: 'taiyab',
  age: 31
}


