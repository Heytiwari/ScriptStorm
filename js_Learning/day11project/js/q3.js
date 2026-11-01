let num = +prompt(`Enter Any Number: `);



while (num >= 10) {
    let sum = 0;
    while (num !== 0) {
        let rem = num % 10;

        sum = sum + rem;

        num = Math.floor(num / 10);
    }
    num = sum;
}
document.write(`${num}`);