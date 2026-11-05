/*
Question 6: Count Digits 

Problem: Write a Program to count the total number of digits in a number. 

Example : Enter any number: 752   

Output :  Total number of digits: 3 
*/

let num = +prompt(`Enter Any Number: `);

let length = 0; //3

while (num !== 0) { // 0 !== 0
    num = Math.floor(num/10); // 0
    length++;
}

document.write(`Length: ${length}`);