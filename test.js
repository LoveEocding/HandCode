
//广度遍历，如果发现B的头相等的值，在进行这个树的广度遍历，如果一次对应没问题 
function compare(a,b){
    const queuea=[a];
    const queueb=[b];
    while(queueb.length){
        const x=queuea.shift();
        const y=queueb.shift();
        if(!x||x.val!==y.val){
            return false;
        }

        x.left&&queuea.push(x.left);
        x.right&&queuea.push(x.right);
        y.left&&queueb.push(y.left);
        y.right&&queueb.push(y.right);
    }
    return true;
}
var isSubStructure = function(A, B) {
     
     const queue=[A];
     while(queue.length){
         const head=queue.shift();
         if(head.val===B.val){
             const res=compare(head,B);
             if(res){
                 return true;
             }
         }
         head.left&&queue.push(head.left);
         head.right&&queue.push(head.right);

     }
     return false;
};
const A={val:1,left:{val:2,left:null,right:null},right:{val:3,left:null,right:null}};
const B={val:2,left:null,right:null};
console.log(isSubStructure(A,B));