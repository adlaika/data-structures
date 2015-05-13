var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stackObj = {};
  stackObj.top = -1;

  extend(stackObj, stackMethods);

  return stackObj;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.top++;
  this[this.top] = value;
  //console.log(this[this.top]);

};

stackMethods.pop = function() {
  var result = null;
  if(this.top < 0) {

  } else {
      console.log(this[this.top] + " " + this.top);
    result = this[this.top];
    delete this[this.top];
    this.top--;
  }
  console.log(result + "result");
  return result;
};



stackMethods.size = function() {
  return this.top + 1;
}
