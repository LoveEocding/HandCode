//发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象状态发生改变，所有的依赖于它的对象都会收到通知。在javascript开发中一般用事件模型代替传统的发布-订阅者模式。

//定义通用的发布者
var event = {
    list: {},
    listen: function (name, callback) {
        if (this.list[name]) {
            this.list[name] = [];
        }
        this.list[name].push(callback);
    },
    trggle: function (name) {
        const events = this.list[name];
        if (events) {
            while (events.length) {
                events.shfit()();
            }
        }
    }
}