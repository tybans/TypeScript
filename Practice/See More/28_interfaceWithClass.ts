interface CollegeDataType{
  name:string
  displayTeachersName(): void
  getStudentList():string[]
}

class CollegeData implements CollegeDataType{
  name: string
  constructor(cName: string){
    this.name = cName
  }
  displayTeachersName(): void {
      console.log("tybans", "Taiyab");
      
  }
  getStudentList(): string[] {
      return ['tybans', 'ans']
  }
}

var college1 = new CollegeData("IIT Delhi")

college1.displayTeachersName()
console.log(college1.getStudentList());
