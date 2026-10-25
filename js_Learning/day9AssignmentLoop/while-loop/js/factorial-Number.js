// Write a program adition factorial number using while loop.

// let num = Number(prompt(`Enter Any number: `));

// let i = 1, sum = 0;

// while (i <= num) {
//     sum = sum + i;
//     i++;
// }
// document.write(`Sum: ${sum}`);




// Write a program multiplication factorial number using while loop.

let num = +prompt(`Enter Any Number: `); // 5

let i = 1, mul = 1;

while (num >= i) { // 0 >= 1 
    mul = mul * num;  // 120 * 1 = 120
    num--; //0
}
document.write(`Multiplication: ${mul}`);


