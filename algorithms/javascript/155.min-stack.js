/**
 方法一： 使用临时变量，每次 push 的时候计算最小值。
 问题点在于 pop 的时候取出的可能是最小值，需要重新计算最最小值。

 var MinStack = function() {
  this.min = null;
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === null) {
    this.min = x;
  }
  this.min = Math.min(x, this.min);
};

MinStack.prototype.pop = function() {
  const popValue = this.stack.pop();
  if (popValue !== this.min) {
    return popValue;
  }
  this.min = Math.min.apply(null, this.stack);
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};


// 1 3 6 2 7 4 9 1 3 5 0

 var obj = new MinStack()
 obj.push(1)
 obj.push(3)
 obj.push(6)
 obj.push(2)
 obj.push(7)
 obj.push(4)
 obj.push(9)
 obj.push(1)
 obj.push(3)
 obj.push(5)
 obj.push(0)
 obj.pop()

 console.log(obj);
 var param_3 = obj.top()
 var param_4 = obj.getMin()

 console.log(param_4);

 方法二： 每次 push 的时候，记录当前的值和当前的最小值，这样 pop 的时候，如果是最小值，就不需要再次计算了。

 */
var MinStack = function() {
  this.min = null;
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === null || this.min === undefined) {
    this.min = x;
  }
  this.min = Math.min(x, this.min);
  this.minStack.push(this.min);
};

MinStack.prototype.pop = function() {
  this.minStack.pop();
  this.min = this.minStack[this.minStack.length - 1];
  return this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};

// 1 3 6 2 7 4 9 1 3 5 0

 var obj = new MinStack()
 obj.push(1)
 obj.push(3)
 obj.push(6)
 obj.push(2)
 obj.push(7)
 obj.push(4)
 obj.push(9)
 obj.push(1)
 obj.push(3)
 obj.push(5)
 obj.push(0)
 obj.pop()

 console.log(obj);
 var param_3 = obj.top()
 var param_4 = obj.getMin()

 console.log('top',param_3);
 console.log('min', param_4);
