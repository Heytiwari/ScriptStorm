let a = +prompt(`Enter a First Number: `);
let b = +prompt(`Enter a Second Number: `);
let c = +prompt(`Enter a Third Number: `);

if ((a === b) && (a === c) && (b === c)) {
    document.write(`All are Same.`);
} else if ((a === b) || (a === c) || (b === c)) {
    document.write("Both are Same.");
}else {
    (a < b)
    ?(a < c)
        ?document.write(`${a} is Minimum Number.`)
        :document.write(`${c} is Minimum Number.`)
    :(b < c)
        ?document.write(`${b} is Minimum Number.`)
        :document.write(`${c} is Minimum Number.`);
    
}