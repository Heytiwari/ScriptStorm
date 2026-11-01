let num = +prompt(`Enter Any Number: `);

let last = num % 10;

while (num >= 10) {
    num = Math.floor(num / 10);
}

let first = num;

let sum = first + last;

document.write(`The sum of the first and the last digit: ${sum}`);