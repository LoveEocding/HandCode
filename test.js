var findNumberIn2DArray = function (matrix, target) {
    let a, b = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; i < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};