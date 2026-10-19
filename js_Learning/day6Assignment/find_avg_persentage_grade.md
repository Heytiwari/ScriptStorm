# Student Grade Calculator

## 📌 Project Description

The Student Grade Calculator is a beginner-friendly JavaScript project that takes a student's name, five subject names, and their marks as input. It calculates the total marks, percentage, and final grade, then displays the results in the browser and console.

## 🚀 Features

- Takes the student's name as input.
- Accepts five subject names and their marks.
- Calculates total marks out of 500.
- Calculates the percentage.
- Assigns a grade based on the percentage.
- Displays results using `console.log()` and `document.write()`.

## 💻 Source Code

```javascript


let studentName = prompt(`Enter Student Name: `);

let math = +prompt(`Enter the Math marks: `);
let english = +prompt(`Enter the English marks: `);
let science = +prompt(`Enter the Science marks: `);
let history = +prompt(`Enter the History marks: `);
let hindi = +prompt(`Enter the Hindi marks: `);

let totalNumber = math + english + science + history + hindi;

let percentage = (totalNumber / 500) * 100;

console.log(`Student Name: ${studentName}`);

console.log(`Math = ${math}`);

console.log(`English = ${english}`);

console.log(`Science = ${science}`);

console.log(`History = ${history}`);

console.log(`Hindi = ${hindi}`);

console.log(`Total Number: ${totalNumber}/ 500`);

console.log(`Percentage: ${percentage}`);



document.write(`${studentName}<br>`);

document.write(`Math = ${math}<br>`);

document.write(`English = ${english}<br>`);

document.write(`Science = ${science}<br>`);

document.write(`History = ${history}<br>`);

document.write(`Hindi = ${hindi}<br>`);

document.write(`Total Number: ${totalNumber}/ 500 <br>`);

document.write(`Percentage: ${percentage}<br>`);



if((percentage > 90) && (percentage <= 100)){
    console.log(`Grade: A+`);
    document.write(`Grade: A+`);
}
else if((percentage > 80) && (percentage <= 90)){
    console.log(`Grade: A`);
    document.write(`Grade: A`);
}
else if((percentage > 70) && (percentage <= 80)){
    console.log(`Grade: B+`);
    document.write(`Grade: B+`);
}
else if((percentage > 60) && (percentage <= 70)){
    console.log(`Grade: B`);
    document.write(`Grade: B`);
}
else if((percentage > 50) && (percentage <= 60)){
    console.log(`Grade: C+`);
    document.write(`Grade: C+`);
}
else if((percentage > 40) && (percentage <= 50)){
    console.log(`Grade: C`);
    document.write(`Grade: C`);
}
else if((percentage >= 33) && (percentage <= 40)){
    console.log(`Grade: D`);
    document.write(`Grade: D`);
}
else{
    console.log(`Grade: Fail`);
    document.write(`Grade: Fail`);
}
```

## 📊 Grading System

| Percentage | Grade |
|---|---|
| Above 90% to 100% | A+ |
| Above 80% to 90% | A |
| Above 70% to 80% | B+ |
| Above 60% to 70% | B |
| Above 50% to 60% | C+ |
| Above 40% to 50% | C |
| 33% to 40% | D |
| Below 33% | Fail |

## 📷 Sample Output

**Input Example:**

- Student Name: Rahul
- English: 95
- Mathematics: 90
- Science: 85
- Computer: 92
- Hindi: 88

**Expected Result:**

```text
Student Name: Rahul

Total Number: 450/500
Percentage: 90%
Grade: A
```

## 📸 Screenshots
![Student Details](./screenshort/find_avg_persentage_grade.png)

## 📸 Project Video




https://github.com/user-attachments/assets/0cada62a-6334-40c7-8ccb-ea10e37f1f38



## 🛠️ Technologies Used

- HTML5
- JavaScript

## 🎯 Learning Objectives

- Understanding variables and user input.
- Using arithmetic operators.
- Calculating total marks and percentages.
- Applying conditional statements (`if`, `else if`, and `else`).
- Displaying output using `console.log()` and `document.write()`.

## 👨‍💻 Author

**Rajan Kumar Tiwari**

GitHub: [Heytiwari](https://github.com/Heytiwari)
