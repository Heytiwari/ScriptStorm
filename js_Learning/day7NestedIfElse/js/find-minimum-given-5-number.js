let a = +prompt(`Enter First Number: `);
let b = +prompt(`Enter Second Number: `);
let c = +prompt(`Enter Third Number: `);
let d = +prompt(`Enter Fourth Number: `);
let e = +prompt(`Enter Fifth Number: `);

if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                document.write(`${a} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        } else {
            if (d > e) {
                document.write(`${d} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        }
    } else {
        if (c > d) {
            if (c > e) {
                document.write(`${c} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        } else {
            if (d > e) {
                document.write(`${d} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            if (b > e) {
                document.write(`${b} is maximum value.`);
            } else {
               document.write(`${e} is maximum value.`); 
            }
        } else {
            if (d > e) {
                document.write(`${d} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        }
    } else {
        if (d > c) {
            if (d > e) {
                document.write(`${d} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        } else {
            if (c > e) {
                document.write(`${c} is maximum value.`);
            } else {
                document.write(`${e} is maximum value.`);
            }
        }
    }
}