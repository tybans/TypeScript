var studentData: string | number | [] = "tybans"

studentData = 84

studentData = []


// Return type
function fruitsData(): string | string[] | number {
  var item = 1
  if (item > 1) {
    return ['apple', 'banana']
  }
  else {
    return 'apple'
  }
}



// Params Type
function studentInfo(name: string | number | true){
  return name
}

studentInfo('tybans')
studentInfo(999)