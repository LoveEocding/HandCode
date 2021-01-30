/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"
    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。


 */
//解析思路： 默认第一个就是最长前缀，依次解析寻找公共。替换最长

var longestCommonPrefix = function (strs) {
    let len = strs.length;
    if (!len) {
        return "";
    }
    let first = strs[0];
    all: for (var i = 1; i < len; i++) {
        let b = '';
        let j = 0;
        while (true) {
            b += strs[i][j];
            if (first[j] !== b[j]) {
                if (j == 0) {
                    break all;
                }
                first = b.substring(0, b.length - 1);
                break;
            }
            if (++j === strs[i].length) {
                first = b;
                break;
            }

        }

    }
    return i === len ? first : "";
};