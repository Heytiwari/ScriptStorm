let num = +prompt(`Enter Any Number: `);

let length = 0;

while (num !== 0) {
    num = Math.floor(num/10);
    length++;
}

document.write(`Length: ${length}`);