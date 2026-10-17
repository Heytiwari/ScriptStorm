let num = +prompt("Enter Any Number: ");

if(num < 0){
    console.log(`This Number is Negative.`);
    document.write(`<p>This Number is Negative.</p>`);
}
else if(num === 0){
    console.log(`This Number is Natural.`);
    document.write(`<p>This Number is Natural.</p>`);
}
else if(num > 0){
    console.log(`This Number is Positive.`); 
    document.write(`<p>This Number is Positive.</p>`); 
}else{
    console.log(`Typing Error.`);
    document.write(`<p>Typing Error.</p>`);    
}