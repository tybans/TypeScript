function getInfo() {
  // console.log("getInfo function called");
  const nameInput = document.getElementById('username') as HTMLInputElement
  const name: string = nameInput.value

  const emailInput = document.getElementById('email') as HTMLInputElement
  const email: string = emailInput.value

  const ageInput = document.getElementById('age') as HTMLInputElement
  const age: string = ageInput.value
  console.log(name, email, age);
  
  
}