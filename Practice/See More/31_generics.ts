function fruit(name: string): string {
  return name
}

fruit('apple')
// fruit(100) // not allowed


// Generic
function fruits<T>(name:T):T {
  return name
}

fruits("banana")
fruits(1000)
fruits(true)

let onlyFruits = fruits("banana") //string DT
let onlyNum = fruits(1000) // number DT
let onlyBool = fruits(true) // Boolean DT
