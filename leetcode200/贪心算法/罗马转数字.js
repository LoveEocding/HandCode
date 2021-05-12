//解题思路 从尾部取值匹配
var romanToInt = function (s) {
    const table = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    }
    let sum = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if ((s[i] == 'V' && s[i - 1] == 'I') || (s[i] == 'X' && s[i - 1] == 'I') || (s[i] == 'L' && s[i - 1] == 'X') || (s[i] == 'C' && s[i - 1] == 'X') || (s[i] == 'D' && s[i - 1] == 'C') || (s[i] == 'M' && s[i - 1] == 'C')) {
            let string = `${s[i-1]}${s[i]}`
            sum += table[string];
            i--;
            continue;
        }
        sum += table[s[i]];
    }
    return sum;
};