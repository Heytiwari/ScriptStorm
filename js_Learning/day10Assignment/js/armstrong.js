
let num = +prompt("Enter any number: ");
let sum = 0;

while (num !== 0) {
    let rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
}

(num === sum) 
?document.write(`${num} is Armstrong Number`)
:document.write(`${num} is not Armstrong Number`);
