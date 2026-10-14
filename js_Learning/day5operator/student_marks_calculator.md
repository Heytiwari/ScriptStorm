# Student Marks & Percentage Calculator (JavaScript)

A lightweight console-based JavaScript application designed to record a student's marks across five subjects, calculate the cumulative total score, and determine the overall percentage.

---

## 📌 Features

- **Interactive Prompts:** Captures the student's name, subject names, and corresponding subject scores dynamically via browser `prompt()` dialogs.
- **Type Conversion:** Uses the unary plus operator (`+`) to convert string marks into numeric values for accurate arithmetic calculations.
- **Total Marks Calculation:** Sums up the scores across 5 subjects.
- **Percentage Calculation:** Calculates the overall percentage based on a total possible score of 500 marks.
- **Console Report:** Displays an itemized list of all subjects, marks, total score, and final percentage.

---

## 🧮 Calculation Formulas

### 1. Total Marks
$$\text{Total Marks} = \text{Subject}_1 + \text{Subject}_2 + \text{Subject}_3 + \text{Subject}_4 + \text{Subject}_5$$

### 2. Percentage
$$\text{Percentage} = \left( \frac{\text{Total Marks}}{\text{Maximum Marks (500)}} \right) \times 100$$

---

## 💻 Source Code

```javascript
let studentName = prompt("Enter Student Name: ");

// Input for 5 subjects and marks
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

// Total marks calculation
let totalSubjectNumber = subjectNumber1 + subjectNumber2 + subjectNumber3 + subjectNumber4 + subjectNumber5;

// Output report
console.log("Student Name: " + studentName);
console.log("-----------------------------------");
console.log(subjectName1 + ": " + subjectNumber1);
console.log(subjectName2 + ": " + subjectNumber2);
console.log(subjectName3 + ": " + subjectNumber3);
console.log(subjectName4 + ": " + subjectNumber4);
console.log(subjectName5 + ": " + subjectNumber5);
console.log("-----------------------------------");
console.log("Total Marks: " + totalSubjectNumber + " / 500");

// Percentage calculation
let percentage = (totalSubjectNumber / 500) * 100;
console.log("Percentage: " + percentage + "%");
```

---

## 🚀 How to Run

### Option 1: Browser Console (Quickest)
1. Open any web browser (Chrome, Edge, Firefox, Safari).
2. Open Developer Tools:
   - **Windows / Linux:** Press `F12` or `Ctrl + Shift + I`
   - **macOS:** Press `Cmd + Option + I`
3. Click on the **Console** tab.
4. Copy and paste the script into the console and press **Enter**.
5. Fill in the student's name, subjects, and marks when prompted.
6. Check the formatted report in the console.

### Option 2: Run via HTML File
1. Create an `index.html` file in your project folder.
2. Link your script:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <title>Student Marks Calculator</title>
   </head>
   <body>
     <h1>Student Marks & Percentage Calculator</h1>
     <script src="script.js"></script>
   </body>
   </html>
   ```
3. Open `index.html` in your browser.

---

## 📸 Screenshots

### 1. User Prompts (Inputs)
*Add a screenshot showing the prompt boxes where the student name and marks are entered.*

![Prompt Inputs](./screenshots/prompt-inputs.png)

---

### 2. Console Report (Output)
*Add a screenshot showing the itemized score sheet and percentage printed in the console.*

![Console Output](./screenshots/console-output.png)

---

## 📁 Suggested Directory Structure

```text
student-percentage-calculator/
├── index.html
├── script.js
├── README.md
└── screenshots/
    ├── prompt-inputs.png
    └── console-output.png
```

---

## 📄 License

This project is open-source and free to use for educational and learning purposes.