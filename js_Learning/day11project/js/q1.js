/*
 Print the Series: 1 2 4 7 11 16 22 ... 
 
 Problem: Write a program to print the following series for n terms: 1 2 4 7 11 16 22 … Each term is the previous term plus an increment that increases by 1 each time. 
 
 Example : Enter any number : 7 
 
 Output :  1 2 4 7 11 16 22 
*/


let num = +prompt(`Enter Any Number: `);

let a = 1;  //7
                           5
for(let i = 1; i <= num; i++){  // 2 <= 4
    document.write(`${a} &nbsp;`); // 1 2 4 7
    a = a + i; // 7 + 4 = 11
} 