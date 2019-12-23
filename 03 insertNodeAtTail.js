//problema: https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list

function insertNodeAtTail(head, data) {

  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
   
    if(head === null) return new Node(data);
    
    var current = head;
    while(current.next !== null){
        current = current.next;
    }    
    current.next = new Node(data);
    return head;
}

//ou

function insertNodeAtTail(head, data) {

    if(head === null) return {data: data, next: null};
    
    var current = head;
    while(current.next !== null){
        current = current.next;
    }    
    current.next = {data: data, next: null};
    return head;
}