let a = +prompt(`Enter First Number: `);
let b = +prompt(`Enter Second Number: `);
let c = +prompt(`Enter Third Number: `);
let d = +prompt(`Enter Fourth Number: `);
let e = +prompt(`Enter Fifth Number: `);
let f = +prompt(`Enter Sixth Number: `);

if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                if (a > f) {
                    document.write(`${a} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
                if (e > f) {
                    document.write(`${e} is maximum value.`);
                } else {
                   document.write(`${f} is maximum value.`); 
                }
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
                if (c > f) {
                    document.write(`${c} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
                if (e > f) {
                    document.write(`${e} is maximum value.`);
                } else {
                   document.write(`${f} is maximum value.`); 
                }
            }
        } else {
            if (d > e) {
                if (d > f) {
                    document.write(`${d} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
                if (e > f) {
                    document.write(`${e} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            }
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            if (b > e) {
                if (b > f) {
                    document.write(`${b} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
               if (e > f) {
                    document.write(`${e} is maximum value.`);
               } else {
                document.write(`${f} is maximum value.`);
               } 
            }
        } else {
            if (d > e) {
                if (d > f) {
                    document.write(`${d} is maximum value.`);
                } else {
                   document.write(`${f} is maximum value.`); 
                }
            } else {
                if (e > f) {
                   document.write(`${e} is maximum value.`); 
                } else {
                   document.write(`${f} is maximum value.`); 
                }
            }
        }
    } else {
        if (d > c) {
            if (d > e) {
                if (d > f) {
                   document.write(`${d} is maximum value.`); 
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
                if (e > f) {
                    document.write(`${e} is maximum value.`);
                } else {
                  document.write(`${f} is maximum value.`);  
                }
            }
        } else {
            if (c > e) {
                if (c > f) {
                    document.write(`${c} is maximum value.`);
                } else {
                    document.write(`${f} is maximum value.`);
                }
            } else {
                if (e > f) {
                    document.write(`${e} is maximum value.`);
                } else {
                  document.write(`${f} is maximum value.`);  
                }
            }
        }
    }
}