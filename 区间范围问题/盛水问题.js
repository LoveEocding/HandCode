/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。

 */

//解题思路双指针 左边板子短 左指针移动 右边板子短 右指针移动

var maxArea = function (height) {
    var left = 0;
    var right = height.length - 1;
    let max = 0;
    while (left < right) {
        max = Math.max(max, (right - left) * (height[right] > height[left] ? height[left++] : height[right--]));
    }
};

console.log(maxArea([1, 2, 4, 3]));