

// Function Statement
function a(){
    console.log("a called");
}

// Function Expression
var b = function(){
    console.log("b called");
}

a();
b();

// Function Declaration : same as function statement

// Anonymous function
// function (){
//     console.log("anonymous")
// }

// Named Function Expression
var c = function xyz(){
    console.log("c called");
}

// Difference between Parameters and Arguments
function d(param1, param2){          //Parameters
    console.log(param1, param2);
}

d("Hello", "Javascript");   // Arguments

// First Class Functions or First Class Citizens

var e = function(){
    return function (){              // anonymous functions

    }
}

console.log(b());