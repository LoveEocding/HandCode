// 代理模式 为一个对象提供一个代用品或占位符，以便控制对它的访问

// 一般在javascript中 有虚拟代理和缓存代理

var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

var proxImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('loading.gif');
            img.src = src;
        }
    }
})();

proxImage.setSrc('http://fsdf.png');