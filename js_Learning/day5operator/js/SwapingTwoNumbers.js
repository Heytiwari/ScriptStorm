
let a = +prompt("Enter First Number: ");  // 10
let b = +prompt("Enter Second Number: "); // 20

console.log("Before Swapping:");
console.log("a = " + a);
console.log("b = " + b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("After Swapping:");
console.log("a = " + a);
console.log("b = " + b);
