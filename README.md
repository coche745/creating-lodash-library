# Creating the Lodash Library
## Table of Contents
+ General Info
+ Technologies
+ Features
+ Setup
+ Status
## General Info
Implementation of some of the most exciting funcionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

I created this project as part of Codecademy's curriculum on my own computer in order to put into practice my knowledge of objects and their methods.

You can see examples of each method in use by running the project on your own computer.
## Technologies
+ Javascript
## Features
+ .clamp() takes in a number, an upper, and a lower bound. Returns lower if number less than lower. Returns upper if number greater than upper. Returns number as is if number between upper and lower.
+ .inRange() takes in a number, a start value, and an end value. Returns true if number between start and end.
Returns false if number less than start or greater than or equal to end. If start is greater than end, start
and end are swapped.
+ .words() takes in a string and creates an array of the words from that string.
+ .pad() takes in a string and a number, and adds spaces to the beginning and end of the string until the amount of characters in the string matches the number.
+ .has() takes in an object and a key and checks to see whether the object has a value at that key. Returns true if there is a value at the key and false if there is not.
+ .invert() takes in an object and swaps each key with its value.
+ .findKey() takes in an object and a function and calls the function on each value of the object. .findKey() 
returns the first key that contains a value that makes the function return true. If the function returns false 
for all the values in the object, then .findKey() will return undefined.
+ .drop() takes in an array and a number, and takes out from the beginning of the array the amount of elements 
specified by number. If no number is supplied, number = 1.
+ .dropWhile() takes in an array and a function, and calls the function on each element of the array. .dropWhile() drops elements from the beginning of the array until the function returns false, then returns the 
remaining array.
+ .chunk() takes in an array and a size and breaks up the array into arrays of the specified size. .chunk() returns an array of these array chunks. If the array can't be broken up evenly, the last array chunk will be smaller than the specified size. If no size is supplied, size = 1.
## Setup
To run this project, install it locally using git
+ git clone https://github.com/coche745/creating-lodash-library
## Status
Project is: finished