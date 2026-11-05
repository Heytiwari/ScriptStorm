/*
Question 7: Sum of First and Last Digit 

Problem: Write a Program to find the sum of a first and the last digit of a number.

 Example : Enter any number: 384  
 
 Output :  Submission: The sum of the first and the last digit: 7 

*/


let num = +prompt(`Enter Any Number: `); // 384  3 + 4 =7

let last = num % 10;  // 4

while (num >= 10) { // 3
    num = Math.floor(num / 10); // 3
}

let first = num;  // 3

let sum = first + last; // 3 + 4 = 7

document.write(`The sum of the first and the last digit: ${sum}`);