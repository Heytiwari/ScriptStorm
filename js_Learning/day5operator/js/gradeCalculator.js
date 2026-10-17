/*
Student Grade Calculator
Input: Student Name, 5 Subject Marks
Calculate Total, Percentage, Grade
Display using console.log() and innerHTML
*/ 


let studentName = prompt("Enter Student Name: ");

let subjectName1 = prompt("Enter Subject Name 1: ");
let subjectNumber1 = +prompt("Enter Subject Marks 1: ");

let subjectName2 = prompt("Enter Subject Name 2: ");
let subjectNumber2 = +prompt("Enter Subject Marks 2: ");

let subjectName3 = prompt("Enter Subject Name 3: ");
let subjectNumber3 = +prompt("Enter Subject Marks 3: ");

let subjectName4 = prompt("Enter Subject Name 4: ");
let subjectNumber4 = +prompt("Enter Subject Marks 4: ");

let subjectName5 = prompt("Enter Subject Name 5: ");
let subjectNumber5 = +prompt("Enter Subject Marks 5: ");

let totalSubjectNumber = subjectNumber1 + subjectNumber2 + subjectNumber3 + subjectNumber4 + subjectNumber5;

let percentage = (totalSubjectNumber / 500) * 100;

let grade;

if (percentage >= 90) {
    grade = "A+";   
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 33) {
    grade = "D";
}
else {
    grade = "Fail";
}

console.log("Student Name: " + studentName);
console.log(subjectName1 + " = " + subjectNumber1);
console.log(subjectName2 + " = " + subjectNumber2);
console.log(subjectName3 + " = " + subjectNumber3);
console.log(subjectName4 + " = " + subjectNumber4);
console.log(subjectName5 + " = " + subjectNumber5);
console.log("Total Marks: " + totalSubjectNumber + "/500");
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);