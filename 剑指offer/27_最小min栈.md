### 剑指 Offer 30. 包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.


### 解题思路
1、定义一个辅助的min栈。头部每次推进去的一定是和当前头部比较最小的值。这样从头部取出的一定是最小的
值 初始化一个无穷大的值

### 代码

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.statck=[];
    this.minStack=[Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
   this.statck.push(x);
   this.minStack.push(Math.min(this.minStack[this.minStack.length-1],x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.statck.pop(); 
    this.minStack.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.statck[this.statck.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
     return this.minStack[this.minStack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```