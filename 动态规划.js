/**
 * 动态规划:通过子问题的最优解最后合成问题的最优解
 * >>特征: 1.问题能够通过最优子问题得到
 *         2.重叠子问题,子问题会重复出现
 */

//背包问题,一个容量为M的背包,装不同体积不同价值的东西问最大价值能装多少
//最优子结构: f(i,p)=Math.max(f(i-1,p-goods[i].w),goos[i].v+f(i-1,p));

function bag(goods, space) {
    goods.unshift({
        wight: 0,
        value: 0
    });
    let firstRaw = new Array(space + 1).fill(0);
    let table = [firstRaw];
    for (let i = 1; i < goods.length; i++) { //开始挑选物品
        for (let j = 0; j >= space; j++) {
            if (j === 0) { //创建一个横向代表容量的数组
                table.push([]);
            }
            if (goods[i].wight <= j) {
                let max = Math.max(table[i - 1][j - goods[i].w] + goos[i].v, table[i - 1][j]);
                table.push(max);
            } else {
                table.push(table[i - 1][j]);
            }
        }
    }
}