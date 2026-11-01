# JavaScript Count Digits

## 📌 Description

This JavaScript program counts the total number of digits in a given number using a `while` loop.

The program divides the number by 10 until it becomes `0`. Each division increases the digit count by `1`.

## 📂 Project Structure

```text
day11project/
├── question6.md
├── index.html
├── js/
│   └── q6.js
└── screenshots/
    └── q6.png
```

## 💻 Code

```javascript
let num = +prompt(`Enter Any Number: `);

let length = 0;

while (num !== 0) {
    num = Math.floor(num / 10);
    length++;
}

document.write(`Length: ${length}`);
```

## ⚙️ How It Works

1. The user enters a number using `prompt()`.
2. The variable `length` starts from `0`.
3. The `while` loop runs until the number becomes `0`.
4. `Math.floor(num / 10)` removes the last digit.
5. `length++` increases the digit count by `1`.
6. The loop continues until all digits are counted.
7. `document.write()` displays the total number of digits.

## 📥 Example

**Input:**

```text
Enter Any Number: 752
```

**Calculation:**

```text
752 → 75 → 7 → 0

Total digits = 3
```

**Output:**

```text
Length: 3
```

## 🖼️ Screenshots

### Output Screenshot

![Output Screenshot](./screenshots/q6.png)

## 🛠️ Technologies Used

- HTML
- JavaScript

## 🚀 Concepts Covered

- `prompt()`
- Variables
- `while` loop
- `Math.floor()`
- Division operator (`/`)
- Increment operator (`++`)
- `document.write()`

## 👨‍💻 Author

Rajan Kumar Tiwari

GitHub: [Heytiwari](https://github.com/Heytiwari)