var tupleList: [number, string, boolean, number] = [34, "tybans", true, 50000]

var tupleList2: readonly[number, string, boolean, number] = [34, "tybans", true, 50000]



tupleList.push(12000)
console.log(tupleList);
tupleList.push('BKSC')

console.log(tupleList);
