###  promise方式的ajax

输入（url ） 返回一个promise
XMLHttpRequest 

```
function ajax(url,method,data){
    return new Promise(function(resolve,reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType="json";
        xhr.onload=function(){
            if(this.status=200){
                resolve(this.response);
            }else{
                reject(New Error('error'));
            }
        }
        xhr.onerror=function(){
            reject(new Error('error'));
        }
        xhr.send(data);
    })
}

```

### genarator / promise  版本的async await

输入genarator 输出执行后的结果
```
const promises=[
    new ajax(),
    new ajax(),
]

function *main(arr){
    for(let i of arr){
        yeild i;
    }
}

function co(fn){
    const g=fn();
    handerResult(data){
        if(data.done){
            return 
        }
        data.value.then(data=>{
            handerResult(g.next(data));
        })
    }
    handerResult(g.next());
}
```