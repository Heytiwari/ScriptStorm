/*
Question 3: Sum of Digits Until Single Digit 

Problem: Write a program to keep summing the digits of a number until a single-digit number is left. 

Example : Enter a number :  9875 

Output :  Final : 2  

9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2 
*/


let num = +prompt(`Enter Any Number: `);

while (num >= 10) { 
    let sum = 0; // 2
    while (num !== 0) { // 1 !== 0
        let rem = num % 10; // 1

        sum = sum + rem; // 1 + 1 = 2

        num = Math.floor(num / 10); // 0
    }
    num = sum;
}
document.write(`Final: ${num}`);