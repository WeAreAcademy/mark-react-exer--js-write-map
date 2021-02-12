console.log("======= First, write a `partition` function! =======")

//TODO: write your partition function here...





// Example of use:
console.log("Trying out 'partition'")

const [smallNums, bigNums] = partition([5, 50, 20, 100, 3, 8, 1], isSmall)

console.log(`small nums are: ${smallNums} and bigNums are ${bigNums}`);

function isSmall(num) {
    return num < 10;
}
