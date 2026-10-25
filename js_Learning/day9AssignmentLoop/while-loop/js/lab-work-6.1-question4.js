let num = +prompt(`Enter Any Number: `);



while (num >= 1) {
    if (Math.floor(num / 2)* 2 !== num) {
        document.write(`${num} &nbsp;&nbsp`);
    }
    num--;
}

// while (num >= 1) {
//     if (Math.floor(num/2)*2 === num) {
//         document.write(`${num} is even <br>`);
//     }else{
//         document.write(`${num} is odd <br>`);
//     }
//     num--;
// }