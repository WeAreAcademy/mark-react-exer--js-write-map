[< Back](./README.md)

## Exercise C. Write a function: filter

Edit package.json so that the start script runs node on `src/partC.js`.

Open `src/partC.js`

Write a function to the following specification:

### Parameters:

- an array to examine
- a function, `testIt`, to test an element of the array
  - (This sort of function is commonly known as a "predicate" function or less-formally, a test function.)

### Return value:

Returns a new array with zero or more elements.

### Behaviour:

For each element of the given array, your function should call the given testIt function, passing the element to the function as an argument.

If `testIt` returns true, your function should include that element in the array it will eventually return, otherwise it should exclude it.

### Exercise C.2: Think of edge cases

Think of some edge cases for the filter function and what you would want to happen. Check what the array.filter function does in these cases.

Ensure your implementation does the same in those situations.

#### Suggested edge cases and desired behaviours:

When NO elements of the array pass the test set by your testing function, your `filter` function should return an empty array.

When exactly one element of the array passes the test set by your testing function, your `filter` function should return an array with that element in it (and not, for example, return the bare element)

In short, filter ALWAYS returns an array.

[Next >](./README-D.md)
