type InfoDT = {name: string, email: string}

// interface a {name: string}
// interface b {email: string}

// interface c a | b   // Union does not work here

type a = {name: string}
type b = {email: string}

type c = a | b  // Union works here

var empData: InfoDT = {
  name: "tybans",
  email: 'tybans@gmail.com'
}


var stuData: InfoDT = {
  name: "tybans",
  email: 'tybans@gmail.com'
}