// const count = (start = 0, end = 0) => {
//     if (start <= end) {
//         document.write(`${start} <br>`);
//         start++;
//         count(start, end);
//     } 

// }
// count(1, 20);

// reverse number

// const reverse = (start = 0, end = 0) => {
//     if (start >= end) {
//         document.write(`${start} <br>`);
//         start--;
//         reverse(start, end);
//     } 
// }
// reverse(20, 1);

// factorial

// const fact = (num) => {
//     if (num <= 1) {
//         return 1;
//     }

//     return num * fact(num - 1);
// }
// const ans = fact(5);

// document.write(`${ans}`)


// length 

// const length = (num) => {
//     let count = 0;
//     if (num !== 0) {
//         num = Math.floor(num / 10);
//         count++;
//         count += length(num);
//     }
//     return count;
// }

// const digit = length(123);

// document.write(`${digit}`);

// find palindrome numbar

const palindrome = (num) => {
 let orgNum = num; 
 let rev = 0;
 let rem;

 if (num !== 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);

    // return palindrome(num);
 }

 if (orgNum === rev) {
    document.write(`${orgNum} is Plindrome.`);
 } else {
    document.write(`${orgNum} is not Plindrome.`);
 }
 return rev;

}

const ans = palindrome(121);

// document.write(`${ans}`);