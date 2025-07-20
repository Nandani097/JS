const name = "Nandani"

const repoCount = 50

// console.log(name + repoCount + "Value")
  
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nandani')

// console.log(gameName[0]);    
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());  
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 5)
console.log(anotherString);      
 
const newStringOne = " nandani "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://nandani.com/nandani%20gohel"
console.log(url.replace('%20', '-'));
console.log(url.includes('nandani'));

console.log(gameName.split('-'));
