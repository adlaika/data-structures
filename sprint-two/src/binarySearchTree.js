var BinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods);

  newTree.value = value;
  newTree.right = undefined;
  newTree.left = undefined;

  return newTree;
};

binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if(value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {

};

binaryTreeMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
