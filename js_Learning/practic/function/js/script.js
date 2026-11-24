// TNRN (Take nothing and return nothing)
/*
function myIntroduction() {
    document.write(`Rajan Kumar Tiwari <br>`);
    document.write(`Software Devloper <br><br>`);
}

myIntroduction();
*/

// TSRN (Take something and return nothing)
/*
let a = +prompt(`Enter first number: `);
let b = +prompt(`Enter second number: `);

function arthmaticOperator(a = 0, b = 0) {
   sum = a + b;
   document.write(`sum: ${sum} <br>`);
   sub = a - b;
   document.write(`sub: ${sub} <br>`);
   mul = a * b;
   document.write(`mul: ${mul} <br>`);
   div = a / b;
   document.write(`div: ${div} <br>`);
   rem = a % b;
   document.write(`rem: ${rem} <br><br>`);
}

arthmaticOperator(a, b);

*/

// TNRS (Take nothing and return something)
/*
let num = +prompt(`Enter any number: `);

function cube() {
    return num * num * num;
}
let ans = cube();
console.log(cube());
*/

// TSRS (Take something and return something)

function login(email, password) {
    // if(email === "abc@gmail.com" && password === "Abc@123456"){
    //     alert("Login Successful...");
    // }else{
    //     alert("Login Failed...");
    // }

    // return email === "abc@gmail.com" && password === "Abc@123456";

    if (email === "abc@gmail.com" && password === "Abc@123456") {
        return true;
    } else {
        return false;
    }
}

// if (email === "abc@gmail.com" && password === "Abc@123456") {
//     alert("Login Successful...");
// } else {
//     alert("Login Failed...");
// }

// if (email === "abc@gmail.com" && password === "Abc@123456")
//     alert("Login Successful...");
// else
//     alert("Login Failed...");


login(email, password)
  ? alert("Login Successfull...")
  : alert("Login Failed...");

// let result = login("abc@gmail.com", "Abc@123456");

// console.log(result);





