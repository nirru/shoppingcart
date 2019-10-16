class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class TestMyApprocah {
  constructor(){
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  isEmpty(){
    return this.length === 0;
  }

  getLength(){
    return this.length;
  }

  add(data){
    if (this.start === null){
      this.start = new Node(data);
      this.end = this.start;
    }

    else {
      this.end.next = new Node(data);
      this.end = this.end.next;
    }

    this.length += 1;
  }

  remove(index){
    let current = this.start;
    let previous = current;
    this.iterator = 0;

    if(index < 0 && index > this.length -1){
      return null;
    }
    if (this.length === 0){
      return null;
    }
    if (index === 0){
      this.start = current.next;
    } else {
      while (this.iterator < index){
        //1->2->3->4
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.length--;
    return  current.data;
  }

  printList(){
    let current = this.start;
    let nodes = [];
    while (current !== null){
      nodes.push(current.data);
      current = current.next;
    }
    return nodes.join('->');
  }

  searchData(data){
    let current = this.start;
    let index = 0;
    while (current != null){
      if (current.data === data)
        return `data found at ${index}`;
      index++;
      current = current.next;
    }
  }
}