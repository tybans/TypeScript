// class EmpInfo{
//   name:string= 'tybans'
// }

// var emp1 = new EmpInfo()
// console.log(emp1.name);


class EmpInfo {
  _name: string = 'tybans'
  _email: string = 'tybans@test.com'

  get name(): string {
    return "Mr. " + this._name
  }

  set email(val: string) {
    this._email = "ans_" + val
  }
}

var emp1 = new EmpInfo()
console.log(emp1.name);
emp1.email = 'asbans@test.com'
console.log(emp1.email);

// This code has issues