/*Write Program to Swap two variables without using a third
variable and without using + and - symbol. */


let a = Number(prompt("Enter First Number: "));  // 10
let b = +prompt("Enter Second Number: "); // 20

console.log("Before Swapping:");
console.log("a = " + a);  // 10
console.log("b = " + b);  // 20

a = a ^ b; //10 +  20 = 30
b = a ^ b; // 30 - 20 = 10
a = a ^ b; // 30 - 10 = 20

console.log("After Swapping:");
console.log("a = " + a);
console.log("b = " + b);
