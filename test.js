//从最外层正方形开始旋转，每个位置向右边位移边长
//不断递推里面正方形 直到没有 
//原地 不能用额外的存储
//从外层 每次递减两个循环次数logn 
//逐层翻转
//如果时逐层 一定可以用i j 代替 一定是个规律问题
var rotate = function (matrix) {
    let n = matrix.length
    for (let i = 0; i < n - 1; i++)
        for (let j = i; j < n - 1 - i; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = tmp
        }
};
