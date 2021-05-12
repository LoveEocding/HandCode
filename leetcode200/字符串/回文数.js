/*
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
*/
//不使用转换成字符串 可以用双子针
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let right = 1;
    let left = 0; //初始为 x的总位数
    let sum = x;
    while (sum >= 1) { //算出总位数
        sum /= 10;
        left++;
    }
    //获取第n位的数
    let getNum = (_x, n) => {
        return Math.floor(_x % Math.pow(10, n) / Math.pow(10, n - 1));
    }
    while (left > right) {
        if (getNum(x, left) != getNum(x, right)) return false;
        left--;
        right++;
    }
    return true;

};
isPalindrome(121)