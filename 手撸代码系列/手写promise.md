# 手写Promise
const promise =new Promise(function(resolve,reject){}).then(res=>{},reason={})
1、promise 是一个类
2、私有变量 status: 3种状态 等待、成功、失败 val:成功改变状态后的值 reason:失败的值 successCallBackArr:暂时成功回调数组 failCallBackArr:暂时失败回调数组
3、方法：construct 接受一个立即执行函数 给这个函数传递resolve reject
         resolve 接受一个值 改变状态 执行回调
         reject ....
         then 接受两个回调，返回一个promise
         catch 接受一个回调 返回一个promise
         fially 接受一个回调 一定执行 返回一个promise
         静态方法 all 接受很多promise 返回一个promise 只有所有promise都成功 才成功
         静态方法 resolved 接受一个值 返回一个promise 


```
Class Promise {
    status='pending'
    successCallBack=[];
    failCallBack=[];
    value=undefined;
    reason=undefined;
    construct(fn){
        fn(this.resolve,this.rejected);       
    }
    resolve(data){
       if(this.status==='pending'){
          this.status='successed';
          this.value=data;
          while(successCallBack.length) {
              successCallBack.shift()(data);
          }
       }
    }
    reject(data){
        if(this.status==='pending'){
            this.status='failed';
            this.reason=data;
            while(failCallBack.length){
                failCallBack.shift()(data);
            }
        }
    }
    //then 函数接受两个参数，返回一个promise
    then(successBack,failBack){
        let promise=new Promise(function(resolve,reject){
        if(this.status==='successed'){
            let x= successBack(this.value);
            if(x instanceof Promise){
                x.then(res=>resolve(res),faile=>reject(fail));
            }else{
                resolve(x);
            }

           }
       else if(this.status==='failed'){
            let x= failBack(this.reason);
            if(x instanceof Promise){
                x.then(res=>resolve(res),faile=>reject(fail));
            }else{
                reject(x);
            }
           }

        })
        else{
            //暂时存起来
            this.successCallBack.push(successBakc);
            this.successFail.push(failBack);
        }
     
    }
    catch(failBack){
        this.then(undefined,failBack);
    }
    finally(callback){
        return this.then(value=>{
            return Promise.resolved(callback()),then(()=>value);
        },reason=>return Promise.resolved(callback()),then(()=>{ throw(reason) }););
    }
    //所有promise 都需要执行完成才改变状态,有一个失败就失败
    static all(arr){
         const result=[];
         return new Promise((resolve,reject)=>{
                 addData(value){
                     result.push(value);
                     if(result.length===arr.length){
                         resolve(result);
                     }
                 }
                 for(let i in arr){
                 arr[i].then(value=>addData(value),reason=>reject(reason));
                 }
         })
        
    }
    static resolved(value){
        if(value instanceof Promise){
            return value;
        }
        return new Promise((resolve,reject)=>resolve(value));
    }

}

```
