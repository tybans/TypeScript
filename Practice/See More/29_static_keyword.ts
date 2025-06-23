// class Company{
//   name: string = "Google"
// }

// var c1 = new Company()

// console.log(c1.name);


class Company{
  static name: string = "Google"
  location = 'BKSC'
  getName(){
    // return 'Google and YT'
    // return this.name // because static is there so it is not accessible
    return this.location
  }
}

var c1 = new Company()

// console.log(c1.name);
console.log(Company.name); // using static keyword, the property becomes the part of the class, not the object
console.log(c1.getName());


