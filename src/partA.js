function uppercase(str) {
    return str.toUpperCase();
}

function calculateLength(str) {
    return str.length;
}

function double(num) {
    return num * 2;
}


console.log("======= First, write a `map` function! =======")

// TODO: write your function here




// Examples of use
console.log("Trying out 'map'")

//Some data:
const numbers = [10, 20, 30, 40, 50];
const names = ["india", "matt", "emmanuel"]

//Try it out:

const result1 = map(numbers, double);
console.log(result1); // expect [20, 40, 60, 80, 100]

const result2 = map(names, uppercase);
console.log(result2); //What do you expect?

const result3 = map(names, calculateLength);
console.log(result3);  //What do you expect?

