# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sszyh/lotide`

**Require it:**

`const _ = require('@sszyh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: description
* `function2(...)`: description
* `function3(...)`: description

* `head(array)`: return the first element
* `tail(array)`: return the elements except the first one
* `middle(array)`: return the middle element/or middle two elements
* `assertArraysEqual(actual, expected)`: check if two arrays are equal
* `assertEqual(actual, expected)`: check if two primitive elements are equal
* `assertObjectsEqual(actual, expected)`: check is two objects are equal
* `countLetters(inputString)`: output a object to show the number has showed in the string
* `countOnly(allItems, itemsToCount)`: Counts the number of occurrences of the specified items
* `eqArrays(array1, array2)`: check if two arrays are equal
* `eqObjects(object1, object2)`: check is two objects are equal
* `findKey(object, callback)`: find the key of specified function
* `findKeyByValue(object, value)`:find the key of specified value
* `letterPositions(sentence)`: find the index that letter shows in a string
* `map(array, callback)`: return a new function base on the callback function
* `takeUntil(array, callback)`: return a array base on the function
* `without(source, itemsToRemove)`: return a array without specified items