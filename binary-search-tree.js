class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  find(sought) {
    let currentNode = this;
    while(currentNode) {
      if(currentNode.val === sought) return currentNode;
      if(currentNode.val > sought) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;    
  }
  traverse(node=this.root) {
    if(node.left) this.traverse(node.left);
    console.log(node.val);
    if(node.right) this.traverse(node.right);
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    // If the tree is empty, make the new node the root
    if (this.root === null) {
        this.root = newNode;
        return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
          // Go to the left subtree
          if (current.left === null) {
              current.left = newNode;
              return this;
          }
          current = current.left;
      } else {
          // Go to the right subtree
          if (current.right === null) {
              current.right = newNode;
              return this;
          }
          current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // If the value is less than the current node's value, insert in the left subtree
    if (val < node.val) {
      if(node.left === null) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);      
    }         
    // If the value is greater than or equal to the current node's value, insert in the right subtree
    else {
      if(node.right === null) {
        node.right = new Node(val);
        return this;
      }      
      return this.insertRecursively(val, node.right);
    }
  }    

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if(!currentNode) return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if(!node) return undefined;
    if(node.val === val) { 
      return node;
    } else if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let res = [];
    let curr = this.root;
    
    function preOrder(node) {
      res.push(node.val);
      if(node.left) preOrder(node.left);
      if(node.right) preOrder(node.right);
    }
    preOrder(curr);
    return res;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let res = [];
    let curr = this.root;
    
    function preOrder(node) {
      if(node.left) preOrder(node.left);
      res.push(node.val);      
      if(node.right) preOrder(node.right);
    }
    preOrder(curr);
    return res;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let res = [];
    let curr = this.root;
    
    function preOrder(node) {
      if(node.left) preOrder(node.left); 
      if(node.right) preOrder(node.right);
      res.push(node.val);           
    }
    preOrder(curr);
    return res;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    if (!node) {
      return [];
    }
  
    const queue = [node];
    const result = [];
  
    while (queue.length) {
      const current = queue.shift();
      result.push(current.val);
  
      if (current.left) {
        queue.push(current.left);
      }
  
      if (current.right) {
        queue.push(current.right);
      }
    }
  
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
