/* 
Question 5: Print Alphabets 

Problem: Write a Program to print all alphabets from a to z by skipping 3 alphabets using do while loop. 

Example : 

Output :  a, e, i, m, q, u, y 
*/


let character = prompt(`Enter Start Character: `);

do {
    document.write(`${character} &nbsp;`);
    character = String.fromCharCode(character.charCodeAt(0) + 4);
} while (character.charCodeAt(0) <= 122);