[< Back](./README.md)

# Exercise A.1 (warm-up): Write a function: doubleArray

Check in package.json that the start script runs node on `src/partA.js`.

Open `src/partA.js`

There, write a function which takes an array of numbers and returns a new array containing the original elements each multiplied by two.  

So if the input array were `[1, 5, 10]`, your function ought to return `[2, 10, 20]`.

Importantly, it should call the provided function, `double`, on each element.

# Exercise A.2 (warm-up): Write a function: uppercaseArray

Continue in the same file.

Write a function which takes an array of strings and returns a new array containing uppercase versions of the original elements. Be careful to use the provided `uppercase` function to process each element. (Yes, it isn't a very useful function, but bear with us.)

E.g. `uppercaseArray(["hi", "bye"])` should return `["HI", "BYE"]`

# Exercise A.3 (warm-up): Commonalities and differences

Look at your two functions, doubleArray, and uppercaseArray. What do they have in common and what parts of their code differ?

In the next exercise you'll write a function which performs the common parts but delegates the custom work to a function it receives as a parameter.

# Exercise A.4: write a function: map

Continue in the same file.

Write a function to the following specification.

### Name:

map

### Parameters:

- array: an array to convert
- action: a function which converts one element

### Return value:

a new array containing converted elements

### Behaviour:

The function should prepare and return a new array containing the collected results from calling the given function to convert, in turn, every element of the original array.

[Next >](./README-B.md)
