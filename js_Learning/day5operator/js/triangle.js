/*Write a Program to find the third angle of a triangle if two
other angles are given.*/


let firstAngle = +prompt("First angle: ");
let secondAngle = +prompt("Second angle: ");

let thirdAngle = 180 - (firstAngle + secondAngle);

console.log("This is a Third Angle Answer: ", thirdAngle);
