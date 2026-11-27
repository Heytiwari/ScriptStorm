// using fat arrow function
const sum = ((a, b) =>{
    return a + b;
})(10, 20);

console.log(sum);

// using Anonymous function
const sum1 = (function(a,b){
    return a + b;
})(10, 10);
console.log(sum1);

// using normal function
const sum2 = (function add(a,b){
    return a + b;
})(10, 15);
console.log(sum2);
