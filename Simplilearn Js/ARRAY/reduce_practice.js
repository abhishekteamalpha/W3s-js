let a = [1, 2, 3, 4, 5];

// Reduce method is a Higher order function.
// For using the reduce method we need array.
// Higher order function is a function which takes another function as an argument.
// reduce method gives single output.

let final_otput = a.reduce(test);
console.log(final_otput, "Final Output");
// traditional function.
function test(abc, def) {
return abc + def;
}

// Higher order function.
test = () => {

}