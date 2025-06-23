var headingEle = document.querySelector('h1')
console.log(headingEle?.textContent);

// headingEle? -- By default it checks if it is null , so that it does not throw error.


var headingEle1 = document.querySelector('h1')!
console.log(headingEle1.textContent);

// querySelector('h1')! -- That means this h1 element is definately be present in the html and we don't need ? here.


var anchorEle = document.querySelector('a')!
console.log(anchorEle.href);

var anchorClass = document.querySelector('.anchor')! as HTMLAnchorElement
console.log(anchorClass.href);

