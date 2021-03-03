// '123' '456'

var multiply = function (num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const fillarr = new Array((len1 + len2)).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        const a = +num1[i];
        for (let j = len2 - 1; j >= 0; j--) {
            const b = +num2[j];
            const c = a * b;
            let z = 0;
            fillarr[j + i + 1] += c % 10;
            if (fillarr[j + i + 1] >= 10) {
                z = fillarr[j + i + 1] / 10 | 0;
                fillarr[j + i + 1] = fillarr[j + i] % 10;
                fillarr[j + i] += z;
            }
            fillarr[j + i] += c / 10 | 0
        }
    }
    while (fillarr[0] === 0 && fillarr.length > 1) {
        fillarr.shift();
    }
    return fillarr.join('');
};
console.log(multiply('9', '0'));