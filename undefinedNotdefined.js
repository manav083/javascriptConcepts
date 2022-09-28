console.log(a);  //undefined

var a = 7;

console.log(a); // 7
// console.log(x);  // not defined (uncaught reference error: x is not undefined)


var a1 ;

console.log(a1);
a1 = 10;

if(a1 === undefined) {
    console.log("a1 is undefined");
}
else {
    console.log("a1 is not undefinded");
}

// Loosely typed language or weakly typed language

var a2;
console.log(a2);
a2 = 10;
console.log(a2);
a2 = "hello world";
console.log(a2);


