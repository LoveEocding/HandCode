# 实现 strStr() 找到包含字符串出现的位置
### 解题思路
指针，滑动窗口，一旦出现字符一样的开始滑动，如果完全匹配返回位置，
如果不匹配回溯到刚开始出现的位置。
### 代码
```javascript
var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    const needlelen = needle.length;
    for (let i = 0, len = haystack.length; i < len; i++) {
        let b = 0;
        if (haystack[i] === needle[b]) {
            let a = i;
            let k = b + 1;
            let j = i + 1;
            while (k < needlelen) {
                if (haystack[j] !== needle[k]) {
                    break;
                }
                k++;
                j++;
            }
            if (k === needlelen) return a;
        }
    }
    return -1;
};
```