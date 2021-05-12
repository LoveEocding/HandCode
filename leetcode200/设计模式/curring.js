//函数柯里化 A(1)(2)(3)
function curring(fn) {
    const len = fn.length;
    let store = [];
    var rcurr = function (...arguments) {
        store = store.concat(Array.from(arguments));
        if (store.length >= len) {
            return fn(...store);
        }
        return rcurr;
    }
    return rcurr();
}

function add(a, b, c) {
    return a + b + c;
}
var currAdd = curring(add);

console.log(currAdd(1)(2)(3));