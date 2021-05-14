var movingCount = function (m, n, k) {
    const board = new Array(m);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(n).fill(false);
    }
    function addSum(a, b) {
        return Number(a) + Number(b);
    }
    function sum(i, j) {
        const res = Number(String(i).split('').reduce(addSum)) + Number(String(j).split('').reduce(addSum));
        return res;
    }
    function bfs(arr, k) {
        for (let i = 0; i < arr.length; i++) {
            const a = arr[i][0];
            const b = arr[i][1];

            if (a >= 0 && a <= m - 1 && b >= 0 && b <= n - 1 && sum(a, b) <= k) {
                if (board[a][b]) {
                    continue;
                }
                board[a][b] = true;
                bfs([[a + 1, b], [a, b + 1]], k);
            }
        }
    }
    bfs([[0, 0]], k);
    return board.flat().filter(item => item === true).length;
};
console.log(movingCount(1, 2, 1));