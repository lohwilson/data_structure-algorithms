// linked list stack implementation

class Node {
  constructor (data, next = null) {
      this.data = data
      this.next = next
  }
}

class Stack {
  constructor () {
      this.head = null
  }

  push (data) {
      this.head = new Node(data, this.head)
  }

  pop () {
      let data = this.head.data
      this.head = this.head.next
      return data
  }

  peek () {
      return this.head.data
  }

  isEmpty(){
      return this.head == null
  }
}


// array stack implementation

class Stack {
  constructor() {
    this.items = []
  }

  push(item){
    this.items.push(item)
  }

  pop(){
    return this.items.pop()
  }

  peek(){
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0
  }
}

