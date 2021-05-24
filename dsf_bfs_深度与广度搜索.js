/*-----深度优先搜索法　DFS
  从起点出发,选择一个方向不断前行,直到无法继续为止,然后
  尝试另外一条路,问题的要求并不在乎路径长短,只在乎有没有. 
  有时候也会要求把路径完整打印出来
  >>解题思路 依赖栈 特点是先进后出.当前访问一个节点,推入栈中
  如果当前节点没有可以访问的节点出栈.
*/

function dfs(arr){
   const statck=[arr];
   while(statck.length){
      const node=statck.pop();
      console.log(node.val);// 打印
      for(let i=0;i<node.childNode.length;i++){
          statck.push(node.childNode(i));
      }
   }
}

/*------ 广度优先搜索法  BFS
 一般解决最短路径问题,从起点开始一层一层访问,每层当中点距离和
 起始距离都相等一旦找到终点就结束
 >> 解题思路 依赖于队列先进先出
*/
function bsf(arr){
  const queue=[arr];
  while(queue.length){
    const node=shift();
    console.log(node.val);
    for(let i=0;i<node.childNode.length;i++){
       queue.push(node.childNode[i]);
    }
  }
}