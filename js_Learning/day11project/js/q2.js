/*
Question 2: Check Disarium Number 

Problem: Write a program to check whether a number is a Disarium Number or not. 

A Disarium number is a number in which the sum of its digits powered with their respective positions is equal to the number itself. 

Example : Enter a number : 135 
Output :  135 is a Disarium number. 

135 → 1¹ + 3² + 5³ = 135 → Disarium 
*/




let num = +prompt("Enter Any Number: ");

let orgNum = num;
let sum = 0;
let count = 0;

// while (num !== 0) {
//     count++;
//     num = Math.floor(num / 10);
// }
// num = orgNum;

while (num !== 0) {
    let rem = num % 10;
    count++;
    let mul = 1;

    for(let i = 1; i <= count; i++){
        mul *= rem;
    }
    sum += mul;
    num = Math.floor(num / 10);
    count--;
}

(sum === orgNum)
    ? document.write(`${orgNum} is Disarium Number.`)
    : document.write(`${orgNum} is Not Disarium Number.`);
 