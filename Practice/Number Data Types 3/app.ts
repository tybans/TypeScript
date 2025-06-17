// Syntax: var/let/const var_name : data_type = value

var num1: number = 10
// let num2: number = 30 // This is showing error because at the same time in js file this variable is declared as a var, so it shows redeclaration error. Let and const we can not redeclare in the same scope.
var num2: number = 30
var num3 = "30"

// var total = num1 + num3
// var total: number = num1 + num3
var total: number = num1 + num2

console.log(total);


var oct:number = 0o10001
var hexa:number = 0x0001
var binary:number = 0b0001

console.log(oct+10);

var item: number = 100
var item2 = "50"
// var itemConverted = Number(item2)
var itemConverted = +(item2)

console.log(item + itemConverted);

// console.log(item + item2);
console.log(item + +item2);



// var data= 30
// var data= 'hello'
// data = "tybans"

var data: number | string = 30
data= "tybans"
