let a = [1, 2, 3, 4, 5];        //array of integers
// index will start from 0.
console.log(a[2], "Array of index 2 from a");      //output: 3 because index starts from 0.

let b = ["acs", "b", "c", "d", "e"];        // array of strings
let c = [1, 2, "avi", 4, 5];        //array of mixed types

let d = {
    a: 1,
    b: 2,
    c: 3,
    d: "abcd"
}           //object.
console.log(d.d, "accessing object");
console.log(d.a + d.b + d.c, "Sum here...")

// array of object.
let e = [
    {
        a: 1,
        b: 2,
        c: 3,
        d: "abcd"
    },
    {
        a: 1,
        b: 2,
        c: 3,
        d: "abcd"
    },
]
console.log(e[0].c, "array of object c access");

// traditional function.
function abc() {
    console.log("hello");
}
abc();

// arrow function.
sum = (a, b) => {
    let abhi = a + b
    console.log(abhi, "sum inside the sum arrow function");
}

sum(7, 8)

// higher order function => the function that takes another function as an argument.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// map function.
arr1.map((item, index) => {
    console.log(item, "ITEM");
    console.log(index, "INDEX");
});

// filter function.
let filtered_data_item = arr1.filter((item, index) => item > 3);
console.log(filtered_data_item, "filtered_data_item");

let filtered_data_index = arr1.filter((item, index) => index > 3);
console.log(filtered_data_index, "filtered_data_index");

// reduce function => reduce the array to a single value.
let total = arr2.reduce((accumulator, current) => {
    return accumulator + current;
}, 10);
console.log(total, "total");


class Car {
    constructor() {
        console.log('constructor');
    }

    abc = "abcd";
    xyz = "xyz";

    drive = () => {
        console.log('drive');
    }
}

// creating the class object 
let obj = new Car();
console.log(obj.xyz, "xyz");
obj.drive();
