
let studentName = prompt("Enter Student Name: ");

let subjectName1 = prompt("Enter Subject Name 1: ");
let subjectNumber1 = +prompt("Enter subject Number 1: ");


let subjectName2 = prompt("Enter Subject Name 2: ");
let subjectNumber2 = +prompt("Enter subject Number 2: ");


let subjectName3 = prompt("Enter Student Name 3: ");
let subjectNumber3 = +prompt("Enter subject Number 3: ");


let subjectName4 = prompt("Enter Student Name 4: ");
let subjectNumber4 = +prompt("Enter subject Number 4: ");

let subjectName5 = prompt("Enter Student Name 5: ");
let subjectNumber5 = +prompt("Enter subject Number 5: ");


let totalSubjectNumber = subjectNumber1 + subjectNumber2 + subjectNumber3 + subjectNumber4 + subjectNumber5;

console.log(subjectName1 + " = " + subjectNumber1);
console.log(subjectName2 + " = " + subjectNumber2);
console.log(subjectName3 + " = " + subjectNumber3);
console.log(subjectName4 + " = " + subjectNumber4);
console.log(subjectName5 + " = " + subjectNumber5);
console.log("Total Subject Number: " + totalSubjectNumber);


let percentage = (totalSubjectNumber / 500) * 100;

console.log(`Student Total Subject Percentage: ${percentage}% `);