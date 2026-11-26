let a = +prompt(`Enter first number: `);
let b = +prompt(`Enter second number: `);

function addition(a, b) {
    
    let sum;

    function add() {
        sum = a + b;
        return sum;
    }
    return add;
}

let result = addition(a,b);

// result()

console.log(result());
