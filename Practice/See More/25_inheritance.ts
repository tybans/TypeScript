class Auth{
  login(name:string, password:string) {
    if(name && password) {
      return "Student Logged in"
    }
    else{
      return "could not login"
    }
    
  }
}

class Student extends Auth {
  // login(name:string, password:string) {
  //   if(name && password) {
  //     return "Student Logged in"
  //   }
  //   else{
  //     return "could not login"
  //   }
    
  // }
  result(marks:number) {
    if(marks> 33){
      return "Pass"
    }
    else{
      return 'Failed'
    }
  }
}


var s1 = new Student()
console.log(s1.result(60));



class Teacher extends Auth {
  // login(name:string, password:string) {
  //   if(name && password) {
  //     return "Student Logged in"
  //   }
  //   else{
  //     return "could not login"
  //   }
    
  // }
  sub(subject:string) {
    if(subject == 'English'){
      return "It's time for english class"
    }
    else{
      return 'Other subject'
    }
  }
}

var t1 = new Teacher()
console.log(t1.sub('English'));
