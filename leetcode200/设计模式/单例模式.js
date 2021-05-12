//单例模式
function getSingle(fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
}
//比如创建一个悬浮框
var createLoginLayer = function () {
    var div = document.createElement('div');
    div.innerHTML = '登录框';
    document.body.appendChild(div);
    return div;
}
var createLoginSingleLayer = getSingle(createLoginLayer);
document.getElementById('loginbk').onclick = function () {
    var laryerdiv = createLoginSingleLayer();
    laryerdiv.style.display = 'block';
}