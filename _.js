const _ = {
/* .clamp() takes in a number, an upper, and a lower bound. Returns lower if number less than lower. Returns upper
if number greater than upper. Returns number as is if number between upper and lower. */
    clamp (num, lower, upper) {
        let value = Math.max(num, lower);
        value = Math.min(value, upper);
        return value;
    },

/* inRange takes in a number, a start value, and an end value. Returns true if number between start and end.
Returns false if number less than start or greater than or equal to end. If start is greater than end, start
and end are swapped. */
    inRange (num, start, end) {
        if (! end) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        return (num >= start && num < end);
    },

/* words takes in a string and creates an array of the words from that string. */
    words (str) {
        let arr = str.split(' ');
        return arr;
      },
/* pad takes in a string and a number, and adds spaces to the beginning and end of the string until the amount
of characters in the string matches the number. */
    pad (str, len) {
        if (len <= str.length) {
          return str;
        }
        let startPadding = Math.floor((len - str.length) / 2);
        let endPadding = len - str.length - startPadding;
        let space = ' ';
        /*for (i = 0; i < addLen; i++) {
          if (i % 2 === 0) {
            str = str + ' ';
          } else if (i % 2 === 1) {
            str = ' ' + str;
          }
        }*/
        str = space.repeat(startPadding) + str + space.repeat(endPadding);
        return str;
    },

/* has takes in an object and a key and checks to see whether the object has a value at that key. Returns true 
if there is a value at the key and false if there is not. */
    has (obj, key) {
        if (obj[key]) {
            return true;
        } else {
            return false;
        }
    },

/* invert takes in an object and swaps each key with its value. */
    invert (obj) {
        let newObj = {}
        for (let i in obj) {
            newObj[obj[i]] = i;
        }
        return newObj;
    },

/* findKey takes in an object and a function and calls the function on each value of the object. findKey 
returns the first key that contains a value that makes the function return true. If the function returns false 
for all the values in the object, then findKey will return undefined. */
    findKey (obj, func) {
        for (i in obj) {
            calling = func(obj[i]);
            if (calling === true) {
                return i;
            }
        }
    },

/* drop takes in an array and a number, and takes out from the beginning of the array the amount of elements 
specified by number. If no number is supplied, number = 1.*/
    drop (arr, num) {
        if (!num) {
            num = 1;
        }  
        arr.splice(0, num);
        return arr;
    },

/* dropWhile takes in an array and a function, and calls the function on each element of the array. dropWhile 
drops elements from the beginning of the array until the function returns false, then returns the remaining 
array.*/
    dropWhile (arr, predicate) {
        while (predicate(arr[0], 0, arr) === true) {
            arr.splice(0, 1);
        }
        return arr;
        /*let i = arr.findIndex(x => {
            return predicate(x, arr.indexOf(x), arr) === false;
        })
        let newArr = this.drop(arr, i);
        return newArr;*/
    },

/* chunk takes in an array and a size and breaks up the array into arrays of the specified size. chunk returns 
and array of these array chunks. If the array can't be broken up evenly, the last array chunk will be smaller 
than the specified size. If no size is supplied, size = 1. */
    chunk (array, size) {
        if (! size) {
            let size = 1;
        }
        let numArrays = Math.ceil(array.length/size);
        let newArr = [];
        let lastInd = 0;
        let firstInd = 0;
        let smallArr = [];
        for (let i = 1; i < numArrays + 1; i++) {
            if (i === numArrays) {
                firstInd = (i - 1) * size;
                smallArr = array.slice(firstInd, array.length);
                newArr.push(smallArr);
                break;
            }               
            lastInd = i * size;
            firstInd = lastInd - size;
            smallArr = array.slice(firstInd, lastInd);
            newArr.push(smallArr);
        }
        return newArr;
    }
};

console.log('These are all of the methods in use!');
  
console.log('_.clamp(5, 6, 9): ', _.clamp(5, 6, 9));
console.log('_.clamp(7, 6, 9): ', _.clamp(7, 6, 9));

console.log('_.inRange(4, 3, 8): ', _.inRange(4, 3, 8));


console.log("_.words('This is a sentence'): ", _.words('This is a sentence'));

console.log("_.pad('hello', 8): ", _.pad('hello', 8));
console.log("_.pad('hello', 15): ", _.pad('hello', 15));

let myObj = {1: 'weightlifting', 2: 'cardio', 3: 'calisthenics', 4: ''};
console.log('myObj: ', myObj);
console.log('_.has(myObj, 3): ', _.has(myObj, 3));
console.log('_.has(myObj, 4): ', _.has(myObj, 4));

console.log('_.invert(myObj): ', _.invert(myObj));

let cardioFinder = (str) => {
    return str === 'cardio';
}
let powerliftingFinder = (str) => {
    return str === 'powerlifting';
}
console.log('_.findKey(myObj, cardioFinder): ', _.findKey(myObj, cardioFinder));
console.log('_.findKey(myObj, powerliftingFinder): ', _.findKey(myObj, powerliftingFinder));

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('myArr: ', myArr);
console.log('_.drop(myArr, 4): ', _.drop(myArr, 4));


let myFunction = (i, index, arr) => {
    return i < 7;
}
console.log('_.dropWhile(myArr, myFunction): ', _.dropWhile(myArr, myFunction));

console.log('_.chunk([1, 2, 3, 4, 5], 2): ', _.chunk([1, 2, 3, 4, 5], 2));

 





// Do not write or modify code below this line.
module.exports = _;