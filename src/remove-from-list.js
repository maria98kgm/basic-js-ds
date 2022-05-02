const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

 function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}








function getIndex(list, n) {
  let head = list;
  let index = 0;
  let indexes = [];
  while (head) {
    if (head.value == n) indexes.push(index);
    index++;
    head = head.next;
  }
  return indexes;
}

function removeElement(list, position, index) {
  if (position == 0) {
    list = list.next;
    return list;
  }
  else {
    if (index == position) {
      list = list.next;
      return list;
    }
    else {
      index++;
      list.next = removeElement(list.next, position, index)
    }
  }
  return list;
}

function removeKFromList(l, k) {
  let toRemove = getIndex(l, k);
  for (let i in toRemove) {
    l = removeElement(l, toRemove[i], 0)
    for (let j in toRemove) {
      if (toRemove[j] > toRemove[i]) toRemove[j] = toRemove[j] - 1;
      else if (toRemove[j] == toRemove[i] + 1) toRemove[j] = toRemove[j] - 1;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
