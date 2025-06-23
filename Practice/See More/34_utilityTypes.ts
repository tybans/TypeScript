interface CollegeData34{
  name: string
  location: string
  no_of_students: number
  no_of_branches?: number
}

// let collegeData34:CollegeData34 = {
//   name: 'BKSC',
//   location: 'Bokaro',
//   no_of_students: 600,
//   no_of_branches: 2
// }


// Prtial :- It is not mandatory to have all the keys, we can remove keys as we want, even we can completely remove all the keys
let collegeData34:Partial<CollegeData34> = {
  name: 'BKSC',
  location: 'Bokaro',
  no_of_students: 600,
  no_of_branches: 2
}


function getCollegeData(data: Partial<CollegeData34>) {

}
getCollegeData({name: 'BKSC'})


// Required :- 

function getCollegeData2(data:Required<CollegeData34>) {

}
getCollegeData2({name: 'BKSC', location:'Bokaro', no_of_students:600, no_of_branches: 2})


// Readonly

var clgData34: Readonly<CollegeData34> = {
  name: 'dhn',
  location: 'dhanbad',
  no_of_students: 500,
  no_of_branches: 5
}

// clgData34.name = "jamshedpur"  can not change the name

// Pick
var colgData34: Pick<CollegeData34, "name"| "location"> = {
  name: 'dhn',
  location: 'dhanbad',
  
}


// Omit
var clgData: Omit<CollegeData34, 'no_of_branches'> = {
  name: 'sacav',
  location: "dcvsvsv",
  no_of_students: 200
}

// Exclude