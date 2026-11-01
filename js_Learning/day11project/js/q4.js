/* 
Question 4: Print Characters Between Two Given Characters 

Problem: Write a program to print all characters from a starting character to an ending character (both inclusive), using a do-while loop. The input characters should be uppercase or lowercase alphabets. 

Example : Enter start character: D   

Enter end character: M 

Output :  Characters from D to M: D E F G H I J K L M 
*/

let startCharacter = prompt(`Enter Start Character: `);
let endCharacter = prompt(`Enter End Character: `);

do {
    document.write(`${startCharacter} &nbsp;`);
    startCharacter = String.fromCharCode(startCharacter.charCodeAt(0) + 1);
} while (startCharacter <= endCharacter);