var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = -1;
  var bottom = -1;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
//    debugger;
    if (size === 0) {
      top++;
      bottom++;
    } else {
      top++;
    }
    storage[top] = value;
    size++;
  };

  someInstance.dequeue = function(){
     var result;
    // if(storage.hasOwnProperty(bottom)){
    //   result = storage[bottom];
    //   delete storage[bottom];
    //   bottom++;
    // }
    if(size > 0) {
      result = storage[bottom];
      delete storage[bottom];
      if(size >  1) {
        bottom++;
      }

      size--;
    } else {
      console.log('empty');
    }

    return result;
  };

  someInstance.size = function(){
    // if (top === bottom) {
    //   return 0;
    // } else {
    //   return top-bottom;
    // }
    return size;
  };

  return someInstance;
};

// var q = Queue();
// q.enqueue('a');
// console.log("size after one enQ: " + q.size());
// q.enqueue('b');
// console.log("size after two: " + q.size());
// q.enqueue('b');
// console.log("size after two: " + q.size());
