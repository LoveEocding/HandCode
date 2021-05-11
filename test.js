/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//1、通过排序排序后可以确定两个为同母异位体
var groupAnagrams = function (strs) {
    const maparr = new Map();
    for (let str of strs) {
        const key = (Array.from(str).sort()).toString();
        const list = maparr.get(key) ? maparr.get(key) : [];
        list.push(str);
        maparr.set(key, list);
    }
    return Array.from(maparr.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));