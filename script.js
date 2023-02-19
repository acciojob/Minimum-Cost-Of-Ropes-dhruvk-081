function minimumCost() {
    
    let n = arr.length;
  if (n < 2) return 0;
  
  // Create a priority queue
  let pq = new PriorityQueue();
  for (let i = 0; i < n; i++) {
    pq.enqueue(arr[i]);
  }
  
  // Start connecting ropes
  let totalCost = 0;
  while (pq.size() > 1) {
    let rope1 = pq.dequeue();
    let rope2 = pq.dequeue();
    let newRope = rope1 + rope2;
    totalCost += newRope;
    pq.enqueue(newRope);
  }
  
  return totalCost;
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) {
    let i = 0;
    while (i < this.items.length && item > this.items[i]) {
      i++;
    }
    this.items.splice(i, 0, item);
  }
  
  dequeue() {
    return this.items.shift();
  }
  
  size() {
    return this.items.length;
  }
} 
