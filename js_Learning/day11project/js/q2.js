/*
Question 2: Check Disarium Number 

Problem: Write a program to check whether a number is a Disarium Number or not. 

A Disarium number is a number in which the sum of its digits powered with their respective positions is equal to the number itself. 

Example : Enter a number : 135 
Output :  135 is a Disarium number. 

135 → 1¹ + 3² + 5³ = 135 → Disarium 
*/




let num = +prompt("Enter Any Number: "); // 135

let orgNum = num;
let sum = 0; // 125
let count = 0; //  3

while (num !== 0) {  // 0 !== 0
    num = Math.floor(num / 10); // 1
    count++;
}
num = orgNum;

while (num !== 0) { // 1
    let rem = num % 10; // 1
    let mul = 1; // 

    for (let i = 1; i <= count; i++) {  // 2 <= 1
        mul *= rem; //  1 * 1 = 1
    }
    sum += mul; //  0 + 125 = 125 + 9 = 134 + 1 = 135
    num = Math.floor(num / 10); // 
    count--; // 0
}

(sum === orgNum)
    ? document.write(`${orgNum} is Disarium Number.`)
    : document.write(`${orgNum} is Not Disarium Number.`);
