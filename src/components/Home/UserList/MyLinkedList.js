class Node {
  constructor(metadata) {
    this.data = metadata;
    this.next = null;
  }
}
class MyLinkedList {

  constructor(){
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  isEmpty(){
    return this.length === 0;
  }

  getLength() {
    return this.length;
  }

  add(data){
    if (this.start === null){
      this.start = new Node(data);
      this.end = this.start;
    }
    else{
      //If the list has already had some nodes added
      // you need to add the new node to the end of
      // the list and update the end and the next property of the previous end node:
      this.end.next = new Node(data);
      this.end=this.end.next;
    }

    this.length += 1;
    // return  this.end.data = data;
  }

  insertAfter(dataToInsert,afterData){
    let current = this.start;
    //A->B->C
    //A->B->X->C
    // after B all you have to do is create x
    // and point it at what B was pointing at
    // and set B to point at x:
    while (current){
      if (current.data=== afterData){
        let node = new Node(dataToInsert);
        if (current === this.end){
          this.end.next = node;
          this.end = node;
        } else {
          node.next = current.next;
          current.next = node;
        }
        this.length++;
      }
      current = current.next;
    }

  }

  //sortList()
  // will sort the nodes of the list in ascending order.
  // Define a node current which will point to head.
  // Define another node index which will point to node next to current.
  // Compare data of current and index node. If current's data is greater than the index's data then, swap the data between them.
  // Current will point to current.next and index will point to index.next.
  // Continue this process until the entire list is sorted.
  //     myList.add(10); 6>10>15>8>20>7
  //     myList.add(8);  6>7>15>10>20>8
  //     myList.add(15); 6>7>8>15>20>10
  //     myList.add(7);  6>7>8>10>20>15
  //     myList.add(20); 6>7>8>10>15>20
  //     myList.add(6);
  sort(){
    let current = this.start;
    let temp;
    while (current){
      let next = current.next;
      while (next){
        if (current.data > next.data){
          temp = current.data;
          current.data = next.data;
          next.data = temp;
        }
        next = next.next;
      }
      current = current.next;
    }
  }

  search(data){
    let current = this.start;
    let index =0;
    while (current != null){
      if (current.data===data){
        return `data found at ${index}`;
      }
      current = current.next;
      index++;
    }
  }

  remove(index){
    let current = this.start;
    let previous = current;
    let iterator = 0;
    //out of index
    if (index < 0 || index > this.length - 1){
      return null;
    }
    if (this.isEmpty()){
      return null;
    }
    //deleting the first element
    if (index === 0) {
      this.start = current.next;
    } else {
      while (iterator < index) {
        iterator++;
        previous = current;
        current  = current.next;
      }
      // remove the element
      previous.next = current.next;//1 2 3 4      2         2 3
    }
    this.length--;
    // return the remove element
    return current.data;

  }

  printList(){
    const nodes = [];
    var current = this.start;
    while (current !== null) {
      nodes.push(current.data);
      current = current.next;
    }
    return nodes.join(' -> ');
  }

}



export default MyLinkedList;
