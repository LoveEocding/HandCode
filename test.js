//输入arr 输出前部分全是奇数 后部分全是偶数 调整顺序 双指针　时间复杂度N 空间复杂N 但是不能保障相对位置
function sort(arr) {
    var i, j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 && arr[j] % 2 === 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        if (arr[j] % 2 === 1) {
            j++;
        }
    }
    return arr;
}

// 使用插入排序，依次向后推，对前面奇数进行插入，后面偶数也能保障相对位置 时间复杂度N*2
function sort2(arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            const temp = arr[i];
            for (let j = i; j > k; j--) {
                arr[j] = arr[j - 1];
            }
            arr[k] = temp;
            k++;

            //广度遍历，如果发现B的头相等的值，在进行这个树的广度遍历，如果一次对应没问题 
            function compare(a, b) {
                const queuea = [a];
                const queueb = [b];
                while (queueb.length) {
                    const x = queuea.shift();
                    const y = queueb.shift();
                    if (!x || x.val !== y.val) {
                        return false;
                    }

                    x.left && queuea.push(x.left);
                    x.right && queuea.push(x.right);
                    y.left && queueb.push(y.left);
                    y.right && queueb.push(y.right);
                }
                return arr;
            }
            const data = {
                i: 'xxx',
                j: 'yyyy'
            }
            let a = '1234{{i}}{{j}}6789{{z}}'
            let b = /\{\{(\w+)\}\}/

            while (b.exec(a)) {
                console.log('有值')
                const r = [RegExp.$1.trim()];
                a = a.replace(b, () => {
                    return data[r] || '';
                });
            }
            console.log(a);
            return true;
        }
        var isSubStructure = function (A, B) {

            const queue = [A];
            while (queue.length) {
                const head = queue.shift();
                if (head.val === B.val) {
                    const res = compare(head, B);
                    if (res) {
                        return true;
                    }
                }
                head.left && queue.push(head.left);
                head.right && queue.push(head.right);

            }
            return false;
        };
        const A = { val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } };
        const B = { val: 2, left: null, right: null };
        console.log(isSubStructure(A, B));
