
// Part 1

// 1. 
const strNum = "123";
const q1Result = Number(strNum) + 7;
console.log("Output:", q1Result); // 130


// 2. 
function checkFalsy(value) {
  if (!value) {
    return "Invalid";
  }
  return "Valid";
}
console.log("Input 0 -> Output:", checkFalsy(0)); // "Invalid"








// 3. 
let oddNumbers = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  oddNumbers.push(i);
  console.log(i);
}
console.log("Printed sequence:", oddNumbers.join(", ")); // 1, 3, 5, 7, 9








// 4. 
const numbersList = [1, 2, 3, 4, 5];
const evenNumbers = numbersList.filter((num) => num % 2 === 0);
console.log("Output:", evenNumbers); // [2, 4]


// 5. 
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log("Output:", mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]






// 6.
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log("Input 2 -> Output:", getDayOfWeek(2)); // "Monday"

// 7. 
const stringsArr = ["a", "ab", "abc"];
const lengthsArr = stringsArr.map((str) => str.length);
console.log("Output:", lengthsArr); // [1, 2, 3]

// 8. 
function checkDivisibleBy3And5(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log("Input 15 -> Output:", checkDivisibleBy3And5(15)); // "Divisible by both"




// 9. 
const square = (n) => n * n;
console.log("Input 5 -> Output:", square(5)); // 25






// 10.
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log("Output:", formatPerson(person)); // "John is 25 years old"




// 11. 
function sumAll(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log("Input (1, 2, 3, 4, 5) -> Output:", sumAll(1, 2, 3, 4, 5)); // 15






// 12. 
function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}



// 13. 
function findLargestNumber(arr) {
  return Math.max(...arr);
}
console.log("Input [1, 3, 7, 2, 4] -> Output:", findLargestNumber([1, 3, 7, 2, 4])); // 7

// 14.
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Input {name: 'John', age: 30} -> Output:", getObjectKeys({ name: "John", age: 30 })); // ["name", "age"]





// 15. 
function splitStringIntoWords(str) {
  return str.split(" ");
}
console.log("Output:", splitStringIntoWords("The quick brown fox"));


