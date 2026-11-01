# JavaScript Print Alphabets by Skipping 3 Alphabets

## 📌 Description

This JavaScript program prints alphabets from `a` to `z` by skipping 3 alphabets using a `do-while` loop.

The program prints every 4th alphabet starting from the character entered by the user.

**Example:**

`a, e, i, m, q, u, y`

## 📂 Project Structure

```text
day11project/
├── question5.md
├── index.html
├── js/
│   └── q5.js
└── screenshots/
    └── q5.png
```

## 💻 Code

```javascript
let character = prompt(`Enter Start Character: `);

do {
    document.write(`${character} &nbsp;`);

    character = String.fromCharCode(character.charCodeAt(0) + 4);

} while (character.charCodeAt(0) <= 122);
```

## ⚙️ How It Works

1. The user enters a starting character using `prompt()`.
2. The `do-while` loop prints the current character.
3. `charCodeAt(0)` gets the Unicode value of the character.
4. `+ 4` skips 3 alphabets and moves to the next character.
5. `String.fromCharCode()` converts the Unicode value back into a character.
6. The loop continues until the character goes beyond lowercase `z`.
7. `document.write()` displays the alphabets.

## 📥 Example

**Input:**

```text
Enter Start Character: a
```

**Output:**

```text
a e i m q u y
```

## 🖼️ Screenshots

### Output Screenshot

![Output Screenshot](./screenshots/q5.png)

## 🛠️ Technologies Used

- HTML
- JavaScript

## 🚀 Concepts Covered

- `prompt()`
- Variables
- `do-while` loop
- `charCodeAt()`
- `String.fromCharCode()`
- Unicode values
- `document.write()`

## 👨‍💻 Author

Rajan Kumar Tiwari

GitHub: [Heytiwari](https://github.com/Heytiwari)