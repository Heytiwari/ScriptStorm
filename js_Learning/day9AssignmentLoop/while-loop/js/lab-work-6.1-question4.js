let num = +prompt(`Enter Any Number: `);

if (num % 2 === 0) {
    num--;
}

while (num >= 1) {
        document.write(`${num} &nbsp;&nbsp`);
    num-=2;
}