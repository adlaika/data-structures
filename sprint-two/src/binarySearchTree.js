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

binaryTreeMethods.contains = function(value, node) {
  var node = node || this;

  //base case
  if(node.value === value) {
    return true;
  } else if(value > node.value) {
    if(node.right !== undefined) {
      return this.contains(value, node.right);
    }
  } else if (value < node.value) {
    if(node.left !== undefined) {
      return this.contains(value, node.left);
    }
  }

  return false;
};

binaryTreeMethods.depthFirstLog = function(fn, node) {
  var node = node || this;

  fn.call(this, node.value);
  if (node.left !== undefined) {
    this.depthFirstLog(fn, node.left);
  }
  if (node.right !== undefined) {
    this.depthFirstLog(fn, node.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(n)
contains: O(n)
depthFirstLog: O(n)
 */
