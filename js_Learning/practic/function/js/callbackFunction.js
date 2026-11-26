function greeting(abc) {
    console.log("Welcome to", abc(10,20));
    
}
function city(a,b) {
    console.log(a+b);
    
    return "Surat";
}

greeting(city);
// greeting(() => "suart")