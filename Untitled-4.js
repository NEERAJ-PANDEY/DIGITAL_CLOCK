//---- array in js
//    Literal Syntax
        // const arr=[];

        // const nameArr =["Neeraj","aryan","arun"];

        // const mixArr =["Neeraj","23",true];

        // // 

//-----Array Method 

//------ For each

// [1,2,3].forEach(function(arrElem){
//     console.log(arrElem);
// })
// const arr=[1,2,3]

// function callback_fn(arrElem){
//     console.log(arrElem)
// }

// const callback_fn=(arrElem) => console.log(arrElem) ;
    // arr.forEach((arrElem, index) => console.log(index, arrElem) );

// arr.forEach(callback_fn)

// ------Looping -using for or while or do while
    // for(var i=0;i<arr.length;i++){
    //     console.log(arr[i])
    // }
// Checking if something is present
        // console.log(arr.includes(2));   //ES6

// Check the index of an  element

        // console.log(arr.indexOf(4));     
// filter-filter out element in array
        // console.log(arr.filter(a => a % 2 ===0),arr) ;

// map -gives a new array with some operation if specified
        // console.log(arr.map(a=>a*2),arr);
// concat -adds two array

    // console.log(arr,concat([4,5]),arr);

// slice- removes element from array

// // console.log(arr.slice(1),arr);
// const arr1 =["ant", "camel","dog","cow", "buffelow"]
// console.log(arr1.slice(1,3),arr1);

// splice-
    // console.log(arr1.splice(1,1),arr1);
    // const deleted=arr1.splice((1,1),arr1);
    // console.log(deleted,arr1);

// every,some
const arr=["Neeraj" ,"Aryan",6];
console.log(arr.some(a => typeof a ==='string' ));
console.log(arr.every(a => typeof a ==='string' ));
//copyWithin

const arr2=[1,2,3,4,5];
// const copyArr=[].concat(arr;

// for of
// for(x of arr){
//         console.log(x);
// }

