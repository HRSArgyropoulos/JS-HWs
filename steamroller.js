//Flatten array WITHOUT using Array.prototype.flat() or Array.prototype.flatMap() methods and with an unknown depth

//We will use recursion for this
var newArr = [];

function steamrollArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Modification to not have the newArr in global scope with var

const steamrollArray = (arr) => {
  let newArr = [];

  const innerArray = (arr) => {
      for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
              innerArray(arr[i]);
          } else {
              newArr.push(arr[i]);
          }
      }
      return newArr;
  }

  return innerArray(arr);
}
