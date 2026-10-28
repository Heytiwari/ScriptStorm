let num = +prompt(`Enter Any Number: `);

let a = 0, b = 1;

for(let i = 1; i <= num; i++){
    document.write(`${a} &nbsp;`);

    a = a + b;
    b = a - b;
}