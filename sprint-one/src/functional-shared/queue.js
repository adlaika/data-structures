var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myQueue = {};
  myQueue.storage = {};
  myQueue.head = -1;

  _.extend(myQueue, queueMethods);

  return myQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.head++;
  this.storage[this.head] = value;
};

queueMethods.dequeue = function() {
  var result = null;
  if (this.size() > 0) {
    result = this.storage[0];
    //shift
    for (var i = 1; i < this.size(); i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.size() - 1];
    this.head--;
  }
  return result;
};

queueMethods.size = function() {
  //console.log(this.storage.length);
  return Object.keys(this.storage).length;
};

