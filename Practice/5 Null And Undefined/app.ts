var data = null
// data = 5 ; Cannot assign number to null type

var data2: null | string = null
data2 = "Hello" // Now we can assign a string
// data2 = 5; Cannot assign number to null | string type

var userName: null | string = null
var login = true
if (login) {
    userName = "tybans"
}

//==================================================
// Undefined
var item: undefined = undefined
// item = 5; Cannot assign number to undefined type because it is not assignable to type 'undefined'
var userName2 : undefined | string = undefined
userName2 = "tybans"

var val = null