var isMatch = function (s, p) {
    const stackArry = [];
    let haed, j = 0;
    for (let i = 0; i < s.length; i++) {
        if (p[j] !== '*') {
            stackArry.push(p[j])
            j++;
        }
        if (s[i] !== stackArry[0] && stackArry[0] !== '.') {
            if (!stackArry.length) return false;
            i--;
            stackArry.shift();
        }
    }
    for (let j = i; j < p.length; j++) {
        stackArry.push(p[j])
    }
    while (stackArry.length) {
        haed = stackArry.shift();
        if (head !== '.' || head !== '*') {
            return false;
        }
    }
    return true;
};

console.log(isMatch('aab', 'a'));