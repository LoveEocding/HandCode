# 链表每K个一组翻转

### 解题思路
1：分治 先翻转K个 剩余的接着翻转
2：K个翻转 记录前一下， 每次当前指针 执行前一个指针

### 代码

```javascript
var reverseKGroup = function (head, k) {
    var copyhead = head;
    var i = 1;
    while (i < k && copyhead && copyhead.next) {
        copyhead = copyhead.next;
        i++;
    }
    if (i < k || k === 1) {
        return head;
    }
    var before = null;
    var now = head;
    while (i--) {
        var c = now.next;
        now.next = before;
        before = now;
        now = c;
    }
    head.next = reverseKGroup(now, k);
    return before;
}
```