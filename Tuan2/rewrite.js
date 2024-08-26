// **Filter
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(result)
// **Find
// const ages = [3, 10, 18, 20];
// const result = ages.find(checkAge);
// function checkAge(age) {
//   return age > 18;
// }

// console.log(result)
// **Every
// Create an Array
// const ages = [32, 33, 16, 40];
// const result = ages.every(checkAge);
// // Create a Test Function
// function checkAge(age) {
//   return age > 18;
// }
// console.log(result)
// **Map
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log("Old array : " + numbers)
// console.log("Newarray : " + newArr)
// **Reduce
// const numbers = [175, 50, 25];
// const result = numbers.reduce(myFunc);
// function myFunc(total, num) {
//     return total - num;
// }
// console.log(result)
// **Some
// const ages = [3, 10, 18, 20];
// const result = ages.some(checkAdult);

// function checkAdult(age) {
//   return age > 18;
// }
// console.log(result)
// **Any
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
    sum = sum + item;
}
console.log(sum)
// **forEach