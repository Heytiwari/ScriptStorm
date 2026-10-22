let num = +prompt(`Enter Any Number: `);

while (num >= 1) {
    if (num !== 0) {
        document.write(`${num} &nbsp;&nbsp`);
    }
    num = num-2;
}