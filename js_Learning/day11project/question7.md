# JavaScript Sum of First and Last Digit

## 📌 Description

This JavaScript program finds the sum of the first and last digits of a given number.

The program extracts the last digit using the modulus operator (`%`) and finds the first digit using a `while` loop.

**Example:**

`384 → First Digit = 3, Last Digit = 4`

`3 + 4 = 7`

## 📂 Project Structure

```text
day11project/
├── question7.md
├── index.html
├── js/
│   └── q7.js
└── screenshots/
    └── q7.png
```

## 💻 Code

```javascript
let num = +prompt(`Enter Any Number: `);

let last = num % 10;

while (num >= 10) {
    num = Math.floor(num / 10);
}

let first = num;

let sum = first + last;

document.write(`The sum of the first and the last digit: ${sum}`);
```

## ⚙️ How It Works

1. The user enters a number using `prompt()`.
2. `num % 10` extracts the last digit.
3. The `while` loop runs while the number is greater than or equal to `10`.
4. `Math.floor(num / 10)` removes the last digit.
5. When the loop ends, the remaining number is the first digit.
6. The first and last digits are added together.
7. `document.write()` displays the final sum.

## 📥 Example

**Input:**

```text
Enter Any Number: 384
```

**Calculation:**

```text
First Digit = 3
Last Digit = 4

3 + 4 = 7
```

**Output:**

```text
The sum of the first and the last digit: 7
```

## 🖼️ Screenshots

### Output Screenshot

![Output Screenshot](./screenshort/q7.png)

## 🛠️ Technologies Used

- HTML
- JavaScript

## 🚀 Concepts Covered

- `prompt()`
- Variables
- `while` loop
- Modulus operator (`%`)
- Division operator (`/`)
- `Math.floor()`
- Addition operator (`+`)
- `document.write()`

## 👨‍💻 Author

Rajan Kumar Tiwari

GitHub: [Heytiwari](https://github.com/Heytiwari)