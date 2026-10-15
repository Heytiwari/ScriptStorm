
let baseSalary = +prompt("Enter Base Salary: ");

const hra = 10;

const da = 5;

const ta = 8;

let grossSalary = baseSalary + (baseSalary * hra / 100) + (baseSalary * hra / 100) + (baseSalary * ta /100);

console.log("Base Salary: Rs. " + baseSalary);
console.log("House Rent: Rs. " + hra);
console.log("Dearness: Rs. " + da);
console.log("Travel: Rs. " + ta);


console.log("Gross Salary: Rs. " + grossSalary);