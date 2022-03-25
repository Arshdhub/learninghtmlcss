// 3 types of functions in JS


//1) Normal functions 

// Functions definitions

//functions functions_Name(param1 , param2){
   //do something
   //}

// Function(call) invoke
//functions_name(arg1 , arg2);


function substract(a , b){
    return(a-b);
}
let arsh = substract(8,5);
console.log(arsh);

//functions are treated  first class citizens in jawa script

//2) functions expression

// let variable_name = function () {
//     // do something
// }
// name of variable is ised to invoke the funciton
// variable_name();

let sayHi=function () {
    console.log("hello guys is am function expression");
}

let sayBye = function () {
  console.log("bye guys");
};

console.log("line 57\n" + sayHi);
// sayHi();
console.log("line 59\n" + sayBye);
// sayBye();
//abcd(); // error abcd is not defined

 