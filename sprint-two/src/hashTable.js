var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.resize = function () {

  var tmpStorage = LimitedArray(this._limit);

  this._storage.each(function(value, key, storage) {
    this.insert(key, value, tmpStorage);
  });

  this._storage = tmpStorage;

};

HashTable.prototype.insert = function(k, v, storage){
  storage = storage || this._storage;

  var i = getIndexBelowMaxForKey(k, this._limit);
  if(storage[i] === undefined) {
    storage[i] = [];
  }
  var collisionIndex = 0;
  var isInserted = false;
  while (!isInserted) {
    if (storage[i][collisionIndex] === undefined) {
      storage[i][collisionIndex] = [k, v];
      isInserted = true;
      this._size++;


    } else {
      collisionIndex++;
    }
  }
  if(this._size >= .75 * this._limit) {
    this._limit *= 2;
    this.resize();
  }
  // this.resize();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  var collisionList = this._storage[i];

  _.each(collisionList, function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = null;
  this._size--;
  if (this._size < .25 * this._limit) {
    this._limit /= 2;
    this.resize();
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 resize: O(n)
 insert: O(n)
 retrieve: O(1)
 remove: O(n)
 */
