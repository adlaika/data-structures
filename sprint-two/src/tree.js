var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = {};

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[Object.keys(this.children).length] = Tree(value);
};

treeMethods.contains = function(target){
  var result = false;
  //work
  if(this.value === target) {
    result = true;
  }
  //recurse
  _.each(this.children, function(child) {
    result = result || child.contains(target);
  });
  return result;
};

treeMethods.traverse = function(fn, tree) {
  tree = tree || this;

  if(this.value !== undefined) {
    fn.call(this, tree.value);
  }
  _.each(this.children, function(child){
    child.traverse(fn, child);
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
