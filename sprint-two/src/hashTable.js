var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
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

      if(this._size >= .75 * this._limit) {
        this._limit *= 2;
        var bigStorage = LimitedArray(this._limit);

        this._storage.each(function(value, key, storage) {
          this.insert(key, value, bigStorage);
        });

        this._storage = bigStorage;
      }
    } else {
      collisionIndex++;
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  var collisionList = this._storage[i];

  _.each(collisionList, function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
      this._size--;
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage[i] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
