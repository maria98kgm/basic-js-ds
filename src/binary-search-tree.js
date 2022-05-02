const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root(){
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addNew(this.rootNode, value);
    function addNew(node, val) {
      if (!node) {
        return new Node(val);
      }
      if (node.data == val) {
        return node;
      }
      if (val < node.data) {
        node.left = addNew(node.left, val)
      } else {
        node.right = addNew(node.right, val)
      }
      return node;
    }
  }

  has(data) {
    return searchValue(this.rootNode, data);

    function searchValue(node, val) {
      if (!node) return false;
      if (node.data == val) return true;
      return val < node.data ? searchValue(node.left, val) : searchValue(node.right, val);
    }
  }

  find(data) {
    return findValue(this.rootNode, data);

    function findValue(node, val) {
      if (!node) return null;
      if (node.data == val) return node;
      return val < node.data ? findValue(node.left, val) : findValue(node.right, val);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, val) {
      if (!node) return null;
      if (val > node.data) {
        node.right = removeNode(node.right, val)
        return node;
      } else if (node.data > val) {
        node.left = removeNode(node.left, val);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        else {
          let replace = node.right;
          while (replace.left) {
            replace = replace.left;
          }
          node.data = replace.data;
          node.right = removeNode(node.right, replace.data);
          return node;
        }
      }
    }
  }

  min() {
    if (!this.rootNode) return null;
    let smallest = this.rootNode;
    while (smallest.left) {
      smallest = smallest.left;
    }
    return smallest.data;
  }

  max() {
    if (!this.rootNode) return null;
    let biggest = this.rootNode;
    while (biggest.right) {
      biggest = biggest.right;
    }
    return biggest.data;
  }

}

// const tree = new BinarySearchTree();
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);

// console.log(tree.find(8).data);
// console.log(tree.find(2).data);
// console.log(tree.find(32).data);
// console.log(tree.find(14).data);


module.exports = {
  BinarySearchTree
};