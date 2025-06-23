// var studentObj: {name: string, age: number, college: string} = {
//   name: 'tybans',
//   age: 31,
//   college: 'BKSC'
// }


interface Info { name: string, age: number, college: string }

interface Student extends Info {
  class: string
}

interface Teacher extends Info {
  subject: string
}

var studentObj: Student = {
  name: 'tybans',
  age: 31,
  college: 'BKSC',
  class: '12 E'
}

var teacherObj: Teacher = {
  name: 'Taiyab',
  age: 35,
  college: 'BKSC',
  subject: 'English'
}




