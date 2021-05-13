var minArray = function (numbers) {
    const len = numbers.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] < numbers[left]) {
            right = mid;
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }
    return numbers[left];
};

console.log(minArray([3, 4, 5, 1, 2]));