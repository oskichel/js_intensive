let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 33, 66, 99];

function filter(element, index, array) {
  for (let i = 1; i < element; i++)
  if (element % 3 == 0) {
    return true;
  } else return false;
};

Array.prototype.myFilter = function (func, thisArg) {
  if (this == null) {
    throw new Error("Error");
  }
  
  if (arguments.length > 1) {
    context = thisArg;
  }
  
  let context = this;

  let obj = Object(this);

  if (typeof func !== "function") {
    throw new Error("Error");
  }

  let lengthArr = obj.length;
  
  let result = [];
  
  for (let i = 0; i < lengthArr; i++) {
    if (i in obj) {
      let value = this[i];
      if (func.call(context, value, i, obj)) {
        result.push(value);
      }
    }
  }
  return result;
}

let filteredArr = arr.myFilter(filter)
console.log(filteredArr);