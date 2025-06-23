enum WhoType{
  student = "tybans",
  teacher = "Taiyab",
  management = "Management",
  labStaff = "Himanshu"
}

var who: WhoType

// who = "Ansari" // Won't work
who = WhoType.management


enum Fruit{
  a = 'apple',
  b = 'banana',
  c = 'cherry'
}

var myFruit : Fruit = Fruit.a
myFruit= Fruit.c
console.log(myFruit);


enum Roles{
  admin,
  manager,
  qa,
  developer,
  user
}

var userRole: Roles= Roles.admin
console.log(userRole);

var userRole: Roles= Roles.qa
console.log(userRole);
