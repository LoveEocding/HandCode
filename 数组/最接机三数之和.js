//最接近：间距最小 用绝对值比较
//遍历组合：用2分 或者用指针 
//时间复杂度：logn(排序)+n^2遍历

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let cut = 99999999;
    let k = 0;
    for (let i = 0; i < len; i++) {
        let left = 0;
        let right = len - 1;
        while (left < right) {
            left === i ? left++ : left;
            right === i ? right-- : right;
            if (left >= right) {
                break;
            }
            let newval = (nums[left] + nums[right] + nums[i]);
            if (newval > target) {
                right--;
            } else if (newval < target) {
                left++;
            } else {
                return target;
            }
            if (Math.abs(newval - target) < Math.abs(cut)) {
                cut = target - newval;
                k = newval;
            }

        }
    }
    return k;

};

console.log(threeSumClosest([0, 1, 2], 0));