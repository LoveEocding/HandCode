/**
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

 
示例 1：

输入：s = "aa" p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。

 */

//解题思路,通配符从右向左 一个* 最多管一个字符
const isMatch = function (s, p) {
    if (s == null || p == null) return false;
    const slen = s.length,
        plen = p.length;
    //设置dp
    const dp = new Array(slen + 1);
    for (let i = 0; i < dp.length; i++) {
        db[i] = new Array(plen + 1).fill(false);
    }
    //设置基础值
    dp[0][0] = true;
    let i = 0;
    for (let j = 1; j < plen - 1; j++) {
        if (p[j - 1] === '*') {
            dp[i][j] = dp[i][j - 2];
        }
    }
    //迭代
    for (let i = 1; i < slen - 1; i++) {
        for (let j = 1; i < plen - 1; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
                    dp[i][j] = dp[i - 1][j - 2] || dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[slen][plen];
}