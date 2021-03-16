//[1,2,3]
var permute = function (nums) {
    const len = nums.length;
    const res = [];
    const circle = function (aimArr, leftArr) {

        if (aimArr.length == len) {
            res.push(aimArr);
            return;
        }
        for (let i = 0; i < leftArr.length; i++) {
            let lookdata = [...aimArr];
            aimArr.push(leftArr[i]);
            let c = notInclude(leftArr, i);
            circle(aimArr, c);
            aimArr = [...lookdata];
        }
    }
    circle([], nums);
    return res;
};
var notInclude = function (arr, i) {
    let c = [...arr];
    c.splice(i, 1);
    return c;
}
console.log(permute([1, 2, 3]));