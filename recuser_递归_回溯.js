// 递归和回溯
// 递归算法是一种调用自身得函数算法，二叉树很多性质满足递归
// 通俗来说，把要实现的递归函数看成是已经实现好的， 直接利用解决一些子问题，然后需要考虑的就是如何根据子问题的解以及当前面对的情况得出答案。这种算法也被称为自顶向下（Top-Down）的算法。

//解题模板
// 1 判断当前情况是否非法，如果非法就立即返回，这一步也被称为完整性检查（Sanity Check）。例如，看看当前处理的情况是否越界，是否出现了不满足条件的情况。通常，这一部分代码都是写在最前面的。

// 2 判断是否满足结束递归的条件。在这一步当中，处理的基本上都是一些推导过程当中所定义的初始情况。

// 3 将问题的规模缩小，递归调用。在归并排序和快速排序中，我们将问题的规模缩小了一半，而在汉诺塔和解码的例子中，我们将问题的规模缩小了一个。

// 4 利用在小规模问题中的答案，结合当前的数据进行整合，得出最终的答案。
/**
 * function fn(n) {
    // 第一步：判断输入或者状态是否非法？
    if (input/state is invalid) {
        return;
    }

    // 第二步：判读递归是否应当结束?
    if (match condition) {
        return some value;
    }

    // 第三步：缩小问题规模
    result1 = fn(n1)
    result2 = fn(n2)
    ...

    // 第四步: 整合结果
    return combine(result1, result2)
}
 */

// 1、汉诺塔问题 A　B　C  4->3-2-1
function hannuo(len, A, B, C, move = []) {
    if (len === 1) {
        move.push(A + C);
        return;
    }
    hannuo(len - 1, A, C, B);
    move.push(A + C);
    hannuo(len - 1, B, A, C);

}

//编码问题 A->1 B->2 Z-26 给定一个数字字符串问有多少种编码
//和跳一步 跳二步的问题有异曲同工之妙
function codeNumber(number) {
    if (number.length < 2) {
        return 1;
    }
    let cutstring = String.prototype.substr(0, 2).bind(number);
    if (cutstring < 26) {
        return codeNumber(String.prototype.substring(number.length - 1).bind(number)) + codeNumber(String.prototype.substring(number.length - 1).bind(number));
    }
    return codeNumber(String.prototype.substring(number.length - 1).bind(number));
}

// 回溯算法
// 思想 尝试每一种可能性,如果当前可能不行,就回溯到上一步
// 解题模板
result = [];

function recall(val, condations) {
    //非法条件
    if (val === '边界条件') {
        return
    }
    //临界条件
    if (val === '确定返回条件') {
        return val;
    }
    for (item of condations) {
        result.push(item);
        recall(item.condations);
        result.pop();
    }
}