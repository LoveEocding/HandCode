var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor((right - left) / 2);
    while (left <= right) {
        if (target === nums[middle]) {
            let i = middle;
            let j = middle;
            while (nums[i] === target) {
                i--;
            }
            while (nums[j] === target) {
                j++;
            }
            return [i + 1, j - 1];
        }
        if (target > nums[middle]) {
            left = middle + 1;
            middle = Math.floor((right - left) / 2) + left;
        } else {
            right = middle - 1;
            middle = Math.floor((right - left) / 2) + left;
        }

    }
    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 5));