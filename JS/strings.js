//string is a sequence of characters
 var str = "hellopepcoders"

 //   H e l l o <space> p e p c o  d  e   r  s        
 //   0,1,2,3,4,   5,   6,7,8,9,10,11,12,13,14 

console.log(str);
//  0,1,2,3,4
console.log(str[4]);

console.log(str.length)

//extraction method 

//slice method
//slice (start , end )-->start index is inclusive and end index is exclusive


var slicedStr = str.slice(6 , 15);  //start index se shuru hoga aour ending index se ek pahale index tak string kategi
console.log(slicedStr);
console.log(str); //original source of information is not changed

// Replacing str with YOLO

str = "YOLO"
console.log(str)

console.log(str.toLocaleLowerCase());

console.log(str.toLocaleUpperCase());
