
let baseSalary = +prompt("Enter Base Salary: ");

const hra = 10;

const da = 5;

const ta = 8;

let grossSalary = baseSalary + (baseSalary * hra / 100) + (baseSalary * da / 100) + (baseSalary * ta /100);

console.log("Base Salary: Rs. " + baseSalary);
console.log("House Rent: Rs. " + hra);
console.log("Daily Allounce: Rs. " + da);
console.log("Travel: Rs. " + ta);


console.log("Gross Salary: Rs. " + grossSalary);