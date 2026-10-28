let num = +prompt(`Enter Any Number: `);

let sum = 0;
let mul = 1;

let orgNum = num;

while (num !== 0) {
    let rem = num % 10;
    sum += rem;
    mul *= rem;
    num = Math.floor(num / 10);
}
(sum === mul)
    ?document.write(`${orgNum} is Magic Number.`)
    :document.write(`${orgNum} is not Magic Number.`);