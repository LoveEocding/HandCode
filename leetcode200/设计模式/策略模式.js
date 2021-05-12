//策略模式：定义一系列算法，把它们一个一个封装起来，在客户对context发起请求
//把请求委托给这些策略对象计算 
//核心把算法拆成更小的单元

//下面是一个表单验证

var strategies = {
    notEmpty(val, text) {
        if (!val) {
            console.log('不能为空');
            return Error(text);
        }
    },
    maxSize(val, size, text) {
        if (val.length > size) {
            return Error(text);
        }
    }
}

var vaild = function () {
    return {
        chche: [],
        start: function () {
            for (let i = 0; i < this.chche; i++) {
                var message = strategies[this.chche[i][0]](this.chche[i][1], this.chche[i][2]);
                if (message) return message;
            }
        },
        add: function (fn, val, text) {
            this.chche.push([fn, val, text]);
        }
    }
}

var form = {
    usrename: 'nieyao'
}
var formvaild = vaild();
formvaild.add('notEmpty', form.usrename, '名称不能为空');
formvaild.start();