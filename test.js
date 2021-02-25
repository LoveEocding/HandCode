var combinationSum = function (candidates, target) {
    const arr = [];
    candidates = candidates.sort((a, b) => a - b);

    function fill(val, target, sumarr, charcode) {
        if (target === 0) {
            arr.push(sumarr);
            return;
        }
        for (let i = 0, len = candidates.length; i < len; i++) {
            if (candidates[i] < val) continue;
            if (candidates[i] > target) break;
            fill(candidates[i], target - candidates[i], [...sumarr, candidates[i]], charcode + String(candidates[i]).charCodeAt());
        }
    }
    fill(0, target, [], 0);
    return arr;
};

console.log(combinationSum([2, 7, 6, 3, 5, 1], 9));