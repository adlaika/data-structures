

var Graph = function(){
  this.nodes = {};
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

Graph.prototype.contains = function(node){
  var result = false;
  _.each(this.nodes, function(elem) {
    if (node === elem) {
      result = true;
    }
  });
  return result;
};

Graph.prototype.removeNode = function(node){
  //remove node
  if (this.nodes.hasOwnProperty(node)) {
    delete this.nodes[node];
  }
  //remove edge
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    result = this.edges.hasOwnProperty('' + fromNode + ',' + toNode);
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    this.edges['' + fromNode + ',' + toNode] = true;
    this.edges['' + toNode + ',' + fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    delete this.edges['' + fromNode + ',' + toNode];
    delete this.edges['' + toNode + ',' + fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb.call(this, node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



