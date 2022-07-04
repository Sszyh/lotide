const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual.js");

// TEST CODE
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);