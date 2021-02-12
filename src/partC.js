console.log("======= First, write a `filter` function! =======")

//TODO: write your filter function here...





// Example of use:
console.log("Trying out 'filter'")

const newArr = filter([50, 1, 30, 4, 2, 20], isSmall)

console.log(newArr); //check this is [1, 4, 2]

function isSmall(num) {
    return num < 10;
}
