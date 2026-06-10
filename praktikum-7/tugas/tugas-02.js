
class MinStack {
  constructor() {
    this.stack = [];       
    this.minStack = [];    
  }

  
  push(val) {
    this.stack.push(val);


    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }

    console.log(`push(${val}) → stack: [${this.stack}] | minStack: [${this.minStack}]`);
  }

  // pop() - O(1)
  pop() {
    if (this.stack.length === 0) {
      console.log('pop() → Stack kosong!');
      return null;
    }

    const removed = this.stack.pop();

    
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    console.log(`pop() → hapus: ${removed} | stack: [${this.stack}] | minStack: [${this.minStack}]`);
    return removed;
  }

  
  getMin() {
    if (this.minStack.length === 0) {
      console.log('getMin() → Stack kosong!');
      return null;
    }

    const min = this.minStack[this.minStack.length - 1];
    console.log(`getMin() → ${min}`);
    return min;
  }

  
  peek() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }
}


console.log('====== UJI MIN STACK ======');
const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log('---');
ms.getMin(); 

ms.pop();    
ms.getMin(); 

ms.pop();    
ms.getMin();

console.log('\n====== RINGKASAN BIG O ======');
console.log('push()   → O(1) : langsung tambah ke atas stack');
console.log('pop()    → O(1) : langsung hapus dari atas stack');
console.log('getMin() → O(1) : baca puncak minStack tanpa iterasi');
console.log('peek()   → O(1) : baca puncak stack tanpa hapus');
console.log('Space    → O(n) : minStack menyimpan maks n elemen');
