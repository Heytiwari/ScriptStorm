let num = +prompt(`Enter Any Number: `);

let orgNum = num;
let rev = 0;

while (num !== 0) {
    let rem = num % 10;

    rev = rev * 10 + rem;

    num = Math.floor(num / 10);
}

(orgNum === rev)?document.write(`${orgNum} is a Palindrom Number.`):document.write(`${orgNum} is not a Palindrom Number.`);