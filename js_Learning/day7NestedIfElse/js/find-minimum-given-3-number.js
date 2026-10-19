let a = +prompt(`Enter First Number: `);
let b = +prompt(`Enter Second Number: `);
let c = +prompt(`Enter Third Number: `);

if (a < b) {
    if (a < c) {
        document.write(`${a} is minimum value.`);
    }else{
        document.write(`${c} is minimum value.`);
    }
}else{
    if (b < c) {
        document.write(`${b} is minimum value.`);
    } else {
        document.write(`${c} is minimum value.`);
    }
}