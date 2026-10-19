let a = +prompt(`Enter First Number: `);
let b = +prompt(`Enter Second Number: `);
let c = +prompt(`Enter Third Number: `);
let d = +prompt(`Enter Fourth Number: `);

if (a > b) {
    if (a > c) {
        if (a > d) {
            document.write(`${a} is maximum value.`);
        } else {
            document.write(`${d} is maximum value.`);
        }
    } else {
        if (c > b) {
            document.write(`${c} is maximum value.`);
        } else {
            document.write(`${d} is maximum value.`);
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            document.write(`${b} is maximum value.`);
        } else {
            document.write(`${d} is maximum value.`);
        }
    } else {
        if (d > c) {
            document.write(`${d} is maximum value.`);
        } else {
            document.write(`${c} is maximum value.`);
        }
    }
}