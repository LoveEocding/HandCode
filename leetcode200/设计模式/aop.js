//切片编程 把业务逻辑无关的代码剥离，通过动态织入方式掺入业务逻辑模块
Function.prototype.before = function (fn) {
    const _self = this;
    return function () {
        fn(arguments);
        return _self();
    }
}
Function.prototype.after = function (fn) {
    const _self = this;
    return function () {
        _self();
        fn(arguments);
    }
}

function test() {
    console.log('1')
}

test.before(() => {
    console.log('2');
}).after(() => {
    console.log('4');
})();