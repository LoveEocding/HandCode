var firstMissingPositive = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] > n || nums[i] < 1) {
            nums[i] = n + 1;
        }
    }
    for (let i = 0; i < n; i++) {
        let j = Math.abs(nums[i]);
        if (j <= n) {
            nums[j - 1] = Math.sign(nums[j - 1]) < 0 ? nums[j - 1] : -1 * nums[j - 1];
        }
    }
    for (let i = 0; i <= n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
};
console.log(firstMissingPositive([3, 4, -1, 1]));