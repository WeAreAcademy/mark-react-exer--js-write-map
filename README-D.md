[< Back](./README.md)

# Exercise C. Write a function: partition

## About `partition`

`partition` is a less common function (and does not exist as a built-in array method, for example). However, it can be useful at times, and it is quite easy and rewarding to write.

## Set up

Edit package.json so that the start script runs node on `src/partD.js`.

Open `src/partD.js`

## Write it!

Write a function to the following specification:

### Parameters:

- an array to partition
- a function, `testIt`, to test an element of the array. You can assume the function will always return a boolean value.
  - (This sort of function is commonly known as a "predicate" function or less-formally, a test function.)

### Return value:

Returns an array with two elements: first, an array of elements which pass the test, second, an array of elements which failed the test. Either of these arrays may be empty.

For example: `partition([1,2,3,4,5], isOdd)` should return `[ [1,3,5], [2, 4]]`

### Behaviour:

In order to prepare the arrays, for each element of the given array, your function should call the given testIt function, passing the element to the function as an argument.

If `testIt` returns true, your function should include that element in the array of "passing" elements, otherwise it should include it in the array of "failing" elements.

It should "wrap" these two arrays in an array in order to return everything together.

### (The End!)
