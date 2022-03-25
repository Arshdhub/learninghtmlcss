// starting JS-> jawa script
//var,let,constant (variable declare karne ke liye use karte hai)

//variable declaration
var a; //int ,string, float ? js me hame type of variablr nhi batana padta hai  
//variable initalization
a = 10;

console.log(a);
console.log(typeof a);

a = "hello";
console.log(a); 

//typeof oparator--> it tells us the types of data stored in a variable 
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);

a = null;
console.log(a);
console.log(typeof a);


//number 
var num = 10;
console.log(num);
var num = 2.4;
console.log(num);

//boolean
var t = true;
var f = false;
console.log(t);
console.log(f);

var str = a;
 console.log(typeof str);
 str = "How you doing? \ni am fine.how about you?"
 console.log(str);

 var num = 800
 console.log(`half of ${num} is ${num/2} `)


 // redeclaration
 var r ="hello"
 console.log(r)

 var r = 500
 console.log(r)
 
 //overcome karne ke liye 

 // let key word id used

 let l = 100;
 console.log(l);

// let l = 200; //SyntaxError: Identifier 'l' has already been declared
 console.log(l)
 
 // we can reinitialise the variable but we can not redclare
 l = 300;
 console.log(l)

// loops in js 
  var num = 10;
  for(i=0; i<num; i++){
      if(i%2==0){
          console.log("num is even");
      }

  }

  //CONST KEYWORD
  const p = 4;
  console.log(p);