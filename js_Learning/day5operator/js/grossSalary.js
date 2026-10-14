
let baseSalary = +prompt("Enter Base Salary: ");

let hra = +prompt("Enter HRA: ");

let da = +prompt("Enter DA: ");

let ta = +prompt("TA: ");

let grossSalary = baseSalary + (baseSalary * hra / 100) + (baseSalary * hra / 100) + (baseSalary * ta /100);

console.log("Base Salary: Rs. " + baseSalary);
console.log("House Rent: Rs. " + hra);
console.log("Dearness: Rs. " + da);
console.log("Travel: Rs. " + ta);


console.log("Gross Salary: Rs. " + grossSalary);