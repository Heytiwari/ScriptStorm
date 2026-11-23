// TNRN (Take nothing and return nothing)

function myIntroduction() {
    document.write(`Rajan Kumar Tiwari <br>`);
    document.write(`Software Devloper <br>`);
}

myIntroduction();


// TSRN (Take something and return nothing)

// let a = +prompt(`Enter first number: `);
// let b = +prompt(`Enter second number: `);

function arthmaticOperator(a = 0, b = 0) {
   sum = a + b;
   document.write(`sum: ${sum} <br>`);
   sub = a - b;
   document.write(`sub: ${sub} <br>`);
   mul = a * b;
   document.write(`mul: ${mul} <br>`);
   div = a / b;
   document.write(`div: ${div} <br>`);
   rem = a % b;
   document.write(`rem: ${rem}`);
}

arthmaticOperator(20, 10);