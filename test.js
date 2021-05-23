/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//思考,这个过程就是转换2进制的过程

var hammingWeight = function(n) {
    //1 暴力循环一道 用双指针减半
    n=String(n,2);
    const len=n.length;
    let i=0;
    let j=len-1;
    let sum=0;
    while(i<j){
        if(n[i]==='1'){
            sum++;
        }
        if(n[j]==='1'){
            sum++;
        }
        i++;
        j--;
    }
    if(i===j){
        if(n[i]==='1'){
            sum++;
        }
    } 
    return sum;   
};

console.log(hammingWeight(00000000000000000000000000001011));