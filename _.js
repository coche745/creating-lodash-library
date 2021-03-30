const _ = {
    clamp (num, lower, upper) {
        /*if (num < lower) {
            return lower;
        } else if (lower <= num <= upper) {
            return num;
        } else if (num > upper) {
            return upper;
        }*/
        let value = Math.max(num, lower);
        value = Math.min(value, upper);
        return value;
    },
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
    words (str) {
        let arr = str.split(' ');
        return arr;
      },
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
      has (obj, key) {
          if (obj[key]) {
              return true;
          } else {
              return false;
          }
      },
      invert (obj) {
          /*keyArr = Object.keys(obj);
          valueArr = Object.values(obj);
          obj = {};
          for (let i = 0; i < keyArr.length; i++) {
              obj[valueArr[i]] = keyArr[i];
          }
          return obj;*/
          let newObj = {}
          for (let i in obj) {
              newObj[obj[i]] = i;
          }
          return newObj;
      },
      findKey (obj, func) {
          for (i in obj) {
              calling = func(obj[i]);
              if (calling === true) {
                  return i;
              }
          }
      },
      drop (arr, num) {
        if (!num) {
            num = 1;
        }  
        arr.splice(0, num);
        return arr;
      },
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
  

console.log(_.chunk([1, 2, 3, 4, 5], 2));

 





// Do not write or modify code below this line.
module.exports = _;