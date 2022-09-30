// function x(){
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript");
// }

// x();

// function inside setTimeout forms a closure and remember the reference of i.

// code to print 1,2,3,4,5 after each second

// function x(){
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);        
//     }
//     console.log("Namaste JavaScript");
// }

// x();

// expected output "Namaste Javascript 1, 2, 3, 4, 5" 
// output will be "Namaste Javascript" 6,6,6,6,6
// because this will form a closure and settimeout will keep it in seperate memory space
// and this closure will only remember the reference of i 
// not the actual value and as soon as timer will stop it will too late and 
// i value will be 6 and it will print 6 5 times because "Time, Tide and Javascript waits for no one."
// it is happening because i will be pointing to same place (Global space) for each copy of function.
// To resolve this we can simply put let instead of var because let variable is block scope and it will create 
// different closeures and each i will be different.

function x(){
    for (var i = 1; i <= 5; i++) {
        function close(i){
        setTimeout(function () {
            console.log(i);
        }, i * 1000);   
    }     
    close(i);
    }
    console.log("Namaste JavaScript");
}

x();

// this will work because var is function scope and close()
// will create new values for each i or new closures for each i.
