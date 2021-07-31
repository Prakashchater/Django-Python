// function addNum(num1, num2) {
//     console.log(num1+num2);
// }


// function hello(name="Frankie", title="Sir") {
//     console.log(title+" "+name);

// }

// function hello(name="Sam", title="sir"){
//     return title+" "+name
// }

// function timesFive(num) {
//     // Local Scope to the function
//     var results = num * 5;
//     return results
// }



// Global Scope = Defined outside any function
var v = "GLOBAL v"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v);
    stuff = "Reassign stuff"
    console.log(stuff)
}
fun();
console.log(stuff);