let num = +prompt("Enter Any Number: ");

let orgNum = num;
let sum = 0;
let count = 0;

while (num !== 0) {
    let rem = num % 10;
    let mul = 1;
    count++;
    for(let i = 1; i <= count; i++){
        sum *= rem;
    }
    sum += mul;
    num = Math.floor(num / 10);
    count--;
}

(sum === orgNum)
    ? document.write(`${orgNum} is a Disarium Number.`)
    : document.write(`${orgNum} is Not a Disarium Number.`);
 