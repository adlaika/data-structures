var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = -1;

  // Implement the methods below
  someInstance.push = function(value){
    top++;
    storage[top] = value;
  };

  someInstance.pop = function(){
    var result = null;
    if (top > -1) {
      result = storage[top];
      top--;
    }
    return result;
  };

  someInstance.size = function(){
    return top + 1;
  };

  return someInstance;
};
