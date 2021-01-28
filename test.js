var maxArea = function (height) {
    var left = 0;
    var right = height.length - 1;
    let max = 0;
    while (left < right) {
        max = Math.max(max, (right - left) * (height[right] > height[left] ? height[left++] : height[right--]));
    }
};

console.log(maxArea([1, 2, 4, 3]));