# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eva-prokhorenko/lotide`

**Require it:**

`const _ = require('@eva-prokhorenko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
The following functions are currently implemented:

* `head()`: Returns the first element in array 
* `tail()`: Returns the array without the first element 
* `middle()`: Returns middle element(s) in an array 
* `countLetters()`: Counts each letter in a string, returns the object with calculations 
* `countOnly()`: Counts only the element that we specify, returns an object with calculations 
* `findKey()`: finds a key of the element after the defining callback function 
* `findKeyByValue()`: finds a key of the element using its value  
* `letterPositions()`: finds the position of the element in a string  
* `takeUntil()`: returns elements before the stop element
* `flatten()`: Removes the elements from nested arrays and returns a single array 
* `without()`: Removes the unwanted element  



