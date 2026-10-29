
let num = +prompt("Enter any number: ");
let orgNum = num;
let sum = 0;

while (num !== 0) {
    let rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
}

(orgNum === sum) 
?document.write(`${orgNum} is Armstrong Number`)
:document.write(`${orgNum} is not Armstrong Number`);
