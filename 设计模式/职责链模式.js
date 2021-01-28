// 职责链模式：使多个对象都有机会处理请求从而避免发送者和接收者之间的耦合关系
// 将对象形成一条链并沿着这条链传播，直到有一个对象可以处理它

Function.prototype.after = function (fn) {
    const _seft = this;
    return function (...arguments) {
        var ret = _seft(arguments);
        if (ret.status === 'success') {
            return ret;
        }
        return fn(arguments);
    }
}

chain1 = function () {
    return ''
}
chain2 = function () {
    return 'success'
}
var chainfn = chain1.after(chain2).after(chain3);