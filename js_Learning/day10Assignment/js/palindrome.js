let num = +prompt(`Enter Any Number: `);

let rev = 0;

while (num !== 0) {
    let rem = num % 10;

    rev = rev * 10 + rem;

    num = Math.floor(num / 10);
}

(num === rev)?document.write(`${num} is a Palindrom Number.`):document.write(`${num} is not a Palindrom Number.`);