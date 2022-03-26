// Arrray--> is collection of elements
   
let cars = ['BMW', "AUDI" , "MG",1,2,3, true];
// in JS you can store diffrent values of diffrent types in an array
console.log(cars);


// //Accessing the element of an arrays 
console.log(cars[0]);
console.log(cars[3]);

//replacing element in arrays
cars[3]="Mahindra";
console.log(cars[3]);

//Adding element in Arrays

cars[7]="Honda";
console.log(cars);

//Method of an arrays
//1) Pop Method--->  This Method removes the element from the last of the array
cars.pop();
console.log("after poping the element"+cars);


// 2) Push method---> It push a new  element at the end of the arrays  
cars.push("TATA")
console.log("after pushing the element");
console.log(cars);

// 3) unshift method-> this adds element at the starting of array
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// 4) shift method-> it removes Element from 0th index of array
cars.shift();
cars.shift();
console.log(cars);


//2D Arrays---->

let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; //array of string

// array of number
console.log(array2d);// print 2d array
console.table(array2d)//print table in 2d array

//array of arrays

// contigous allocation of memory 
 
console.log(array2d); //prints 2d array
console.table(array2d); // prints 2d array in the from of a table 
let res = array2d[1]; //[ 4, 5, 6 ] 
console.log("printing of res array");
console.log(res);
console.log("res of 2nd index ");
console.log(res[2]);
console.log(array2d[1][2]);
console.log(array2d[1][3]); //undefined 
console.log(array2d.length); // number of rows in a 2d array 
console.log(array2d[0].length) // number of columns in a 2d array
// memory allocation in 2d 
// 2d mein value kaise daale
array2d[1][1] = false;
console.table(array2d);
//directory