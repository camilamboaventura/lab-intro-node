class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a-b);
    this.length ++
  }

  get(pos) {
    if(pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } 
     return Math.max(...this.items);
    
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } 
    return Math.min(...this.items);
  }
 
  sum() {
    if (this.items.length === 0) {
      return 0;
    } 
   return this.items.reduce((acc, curr) => acc + curr) 
  
  }

  
  

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } 
   let sum = this.items.reduce((acc, curr) => acc + curr) ;
   return sum/this.length
  }
}

module.exports = SortedList;
