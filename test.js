var longestValidParentheses = function (s) {
    let max = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                const cur = i - stack[stack.length - 1];
                max = Math.max(max, cur);
            } else {
                stack.push(i);
            }
        }
    }
    return max;
};

console.log(longestValidParentheses(")()())"));