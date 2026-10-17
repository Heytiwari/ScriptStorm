/*
Age Calculator
● Input Birth Year
● Calculate Current Age
● Display category:
    ○ Child
    ○ Teenager
    ○ Adult
    ○ Senior Citizen
*/


let birthOfYear = +prompt("Enter Birth Year: ");

let currentYear = 2026;

let currentAge = currentYear - birthOfYear; //29

console.log("This is your current age: " + currentAge);


if((currentAge >= 60) && (currentAge <=  100)){
    console.log("Senior Citizen");    
}
else if((currentAge >= 18) && (currentAge <= 59)){
    console.log("Adult");  
}
else if((currentAge >= 8) && (currentAge <= 17)){
    console.log("Teenager");  
}
else if((currentAge >= 0) && (currentAge <= 7)){
    console.log("Child");  
}
else{
    console.log("Invalied age");    
}
