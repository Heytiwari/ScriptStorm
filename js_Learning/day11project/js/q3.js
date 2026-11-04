/*
Question 3: Sum of Digits Until Single Digit 

Problem: Write a program to keep summing the digits of a number until a single-digit number is left. 

Example : Enter a number :  9875 

Output :  Final : 2  

9875 → 9+8+7+5 = 29 → 2+9 = 11 → 1+1 = 2 
*/


let num = +prompt(`Enter Any Number: `);

while (num >= 10) { 9875
    let sum = 0;
    while (num !== 0) {
        let rem = num % 10; // 5

        sum = sum + rem;

        num = Math.floor(num / 10);
    }
    num = sum;
}
document.write(`Final: ${num}`);