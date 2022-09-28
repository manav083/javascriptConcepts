var arr = [1,2,3,2,4,4,6]
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]  === arr[j]) {
          let index=   arr.indexOf(arr[j]);
            console.log(index)
            
        }
        
    }

}

console.log(arr);