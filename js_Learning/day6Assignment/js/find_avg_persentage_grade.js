
let studentName = prompt(`Enter Student Name: `);

let math = +prompt(`Enter the Math marks: `);
let english = +prompt(`Enter the English marks: `);
let science = +prompt(`Enter the Science marks: `);
let history = +prompt(`Enter the History marks: `);
let hindi = +prompt(`Enter the Hindi marks: `);

let totalNumber = math + english + science + history + hindi;

let percentage = (totalNumber / 500) * 100;

console.log(`Student Name: ${studentName}`);

console.log(`Math = ${math}`);

console.log(`English = ${english}`);

console.log(`Science = ${science}`);

console.log(`History = ${history}`);

console.log(`Hindi = ${hindi}`);

console.log(`Total Number: ${totalNumber}/ 500`);

console.log(`Percentage: ${percentage}`);



document.write(`${studentName}<br>`);

document.write(`Math = ${math}<br>`);

document.write(`English = ${english}<br>`);

document.write(`Science = ${science}<br>`);

document.write(`History = ${history}<br>`);

document.write(`Hindi = ${hindi}<br>`);

document.write(`Total Number: ${totalNumber}/ 500 <br>`);

document.write(`Percentage: ${percentage}<br>`);



if((percentage > 90) && (percentage <= 100)){
    console.log(`Grade: A+`);
    document.write(`Grade: A+`);
}
else if((percentage > 80) && (percentage <= 90)){
    console.log(`Grade: A`);
    document.write(`Grade: A`);
}
else if((percentage > 70) && (percentage <= 80)){
    console.log(`Grade: B+`);
    document.write(`Grade: B+`);
}
else if((percentage > 60) && (percentage <= 70)){
    console.log(`Grade: B`);
    document.write(`Grade: B`);
}
else if((percentage > 50) && (percentage <= 60)){
    console.log(`Grade: C+`);
    document.write(`Grade: C+`);
}
else if((percentage > 40) && (percentage <= 50)){
    console.log(`Grade: C`);
    document.write(`Grade: C`);
}
else if((percentage >= 33) && (percentage <= 40)){
    console.log(`Grade: D`);
    document.write(`Grade: D`);
}
else{
    console.log(`Grade: Fail`);
    document.write(`Grade: Fail`);
}