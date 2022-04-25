let myIterable = {
  from: 1,
  to: 5
};

function Error(message) {
  this.message = message;
  this.name = "Error";
}
  
myIterable[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
  
    next() {
      if (typeof this.current !== 'number' || typeof this.last !== 'number') {
        throw new Error;
      } if (this.current == undefined || this.last == undefined) {
        throw new Error;
      } if (this.current > this.last) {
        throw new Error;
      } if (this.current <= this.last) {
          return { done: false, value: this.current++ };
      } else {
          return { done: true};
      }
    }
  };
};
  
for(let item of myIterable) {
  console.log(item);
};