/* 
Question 5: Print Alphabets 

Problem: Write a Program to print all alphabets from a to z by skipping 3 alphabets using do while loop. 

Example : 

Output :  a, e, i, m, q, u, y 
*/


let startCharacter = prompt(`Enter Start Character: `);
let endCharacter = prompt(`Enter End Character: `);

do {
    document.write(`${startCharacter} &nbsp;`);
    startCharacter = String.fromCharCode(startCharacter.charCodeAt(0) + 4);
} while (startCharacter <= endCharacter);