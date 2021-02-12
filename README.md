---
module: fundamentals

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - WIP.  map, forEach, filter, higher-order-function, hof
---

# Writing your own version of map, forEach, and filter

(Estimated time: 1-3 hours, spread out)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

## Overview

This small set of exercises has you implement functions that do the same thing as `array.map`, `array.forEach`, and` array.filter`, to improve your understanding of how to use those popular methods and the important common practice of passing functions as arguments to other functions.

## Are you _ready_ to do these exercises?

There are a set of exercises associated with each of the following functions (array.map, array.forEach, and array.filter).

We advise that you do not attempt a set of exercises until such time in the course as you are familiar with the _use_ of the corresponding function. (With the exception of the bonus function, `partition`)

First learn how to _use_ the function in other exercise sets. Then, come back to this exercise set and write a version of the function for yourself for deeper understanding.

## Learning Outcomes

- Implement and reason about functions which take a function as argument.
- Implement and reason about a map function
- Implement and reason about a forEach function
- Implement and reason about a filter function

## Setup: clone this repo, install the required packages

- Clone this repo (or fork then clone)
- In the repo directory, run `yarn` to install any required packages.
- Check that when you run `yarn start` - you get an error about needing to write a `map` function!

## The exercise parts:

Work through the following exercises in order.

- [Part A ("map")](./README-A.md)
- [Part B ("forEach")](./README-B.md)
- [Part C ("filter")](./README-C.md)
- [Part D (bonus - "partition")](./README-D.md)

## TODO (faculty only)

- Add section on tracing the execution of these functions in the debugger.

- Add pointers to other array functions which are worth writing
  e.g. (without the types...)

  - find<T>(arr:T[], predFn:(T)=>boolean): T | undefined,
  - minBy,
  - every<T>(arr:T[], predFn:(T)=>boolean):boolean,
  - repeat(n, fn):void
  - collect(n, fn):T[]
  -

- Sequence a much later set of exercises writing these in TypeScript
