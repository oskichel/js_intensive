class Calculator {
    constructor(x, y) {
        if (arguments.length !== 2) {
        throw new Error('Error: enter two numbers');
      } else if (typeof x !== 'number' || typeof y !== 'number' || isNaN(x) || y == undefined || isNaN(y) || !x || !y) {
        throw new Error('Error: enter a number')
      }
      
      this.x = x
      this.y = y
    }
    
    get SetX() {
      return this.x;
    }
    
    set setX(num) {
      this.x = num;
      if (typeof this.x !== 'number' || isNaN(this.x)) {
        throw new Error(`Error: ${this.x} is not a number`)
      } else {
        return this.x;
      }
    }
    
    get setY() {
      return this.y;
    }
    
    set setY(num) {
      this.y = num;
      if (typeof this.y !== 'number' || isNaN(this.y)) {
        throw new Error(`Error: ${this.y} is not a number`)
      } else {
        return this.y;
      }
    }
    
    logSum() {
      return this.x + this.y;
    }
    
    logMul() {
      return this.x * this.y;
    }
    
    logSub() {
      return this.x - this.y;
    }
    
    logDiv() {
      if (this.y === 0) {
        throw new Error('Error: division by zero');
      } else {
        return this.x / this.y;
      }
    }
}