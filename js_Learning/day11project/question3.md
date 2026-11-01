# JavaScript Sum of Digits Until Single Digit

## 📌 Description
This JavaScript program keeps adding the digits of a number until a single-digit number remains.

Example:

`9875 → 9 + 8 + 7 + 5 = 29 → 2 + 9 = 11 → 1 + 1 = 2`

The final result is `2`.

```
day11project/
├── README.md
├── index.html
├── js
│   └── q2.js
└── screenshots/
    └── q2.png
```

## 💻 Code

```javascript
let num = +prompt(`Enter Any Number: `);

while (num >= 10) {
    let sum = 0;

    while (num !== 0) {
        let rem = num % 10;

        sum = sum + rem;

        num = Math.floor(num / 10);
    }

    num = sum;
}

document.write(`Final : ${num}`);
```

## ⚙️ How It Works

1. The user enters a number using `prompt()`.
2. The outer `while` loop runs while the number is 10 or greater.
3. `sum` starts from `0` for each round.
4. The inner `while` loop extracts each digit using `% 10`.
5. Each digit is added to `sum`.
6. `Math.floor(num / 10)` removes the last digit.
7. After all digits are added, `num = sum` stores the new sum.
8. The process repeats until a single digit remains.
9. `document.write()` displays the final result.

## 📥 Example

**Input:**
```text
Enter Any Number: 9875
```

**Calculation:**
```text
9875 → 9 + 8 + 7 + 5 = 29
29   → 2 + 9 = 11
11   → 1 + 1 = 2
```

**Output:**
```text
Final : 2
```

## 🖼️ Screenshots

Add your screenshots inside a folder named `screenshots`.

### Output Screenshot
![Output Screenshot](./screenshort/q3.png)

## 🛠️ Technologies Used
- HTML
- JavaScript

## 🚀 Concepts Covered
- `prompt()`
- Variables
- Nested `while` loops
- Modulus operator (`%`)
- Addition operator (`+`)
- `Math.floor()`
- `document.write()`

## 👨‍💻 Author
Rajan Kumar Tiwari

GitHub: [Heytiwari](https://github.com/Heytiwari)