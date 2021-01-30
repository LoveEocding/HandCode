// a+b b+C a+b+c
var threeSum = function (nums) {
    const set = nums.sort((a, b) => a < b);
    const arr = [];
    let temp = 0;
    for (let i = 0; i < set.length; i++) {
        temp = set[i] + set[i + 1];
        if (temp === 0) {
            for (j = 0; j < set.length; j++) {
                if (j !== i && j !== i + 1) {
                    arr.push([
                        set[i],
                        set[i + 1],
                        set[j]
                    ])
                }
            }
            continue;
        }
        let num = set.indexOf(-1 * temp);
        if (num >= 0 && num !== i && num !== i + 1) {
            arr.push([
                set[i],
                set[i + 1],
                -1 * temp
            ])
        }

    }
    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));