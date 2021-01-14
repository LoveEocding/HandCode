//冒泡排序 
//思想每次把极限值规划到边缘，下次继续排范围内的值
function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
//插入排序
//思想：假设每次排序前面已经是排好的了，每次比较已经排好的序列
function insertSort(arr) {
    let temp;
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    return arr;
}

//归并排序 
//思想拆分单元在组合分而治之
function mergeSort(arr) {

    if (arr.length <= 1)
        return arr;
    let len = arr.length;
    let minddle = len % 2 == 0 ? Math.floor(len / 2) : Math.floor(len / 2) + 1;
    let left = arr.slice(0, minddle);
    let right = arr.slice(minddle, len);
    return mergeData(mergeSort(left), mergeSort(right));
}

function mergeData(left, right) {

    let tempArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            tempArr.push(left.shift());
        } else {
            tempArr.push(right.shift());
        }
    }
    return tempArr.concat(left).concat(right);
}

//console.log(mergeSort([5, 4, 3]));

//快速排序
//原理：分而治之 原地排序，小的左 大的右 最后归并
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    let left = [],
        right = [],
        minddle, len, minddleArr = [];
    len = arr.length;
    minddle = Math.floor(len / 2);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[minddle]) {
            right.push(arr[i]);
        } else if (arr[i] < arr[minddle]) {
            left.push(arr[i]);
        } else {
            minddleArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(left)).concat(minddleArr).concat(quickSort(right));
}
//console.log(quickSort([5, 4, 4, 3]));

//希尔排序
//原理：在插入排序的基础上，先进行几轮排序将有序化一点最后进行一轮插入排序
function shellSort(arr) {
    //寻找基准值
    let baseNumber = 1;
    let len = arr.length;
    while (baseNumber < Math.floor(len / 3)) {
        baseNumber = baseNumber * 3 + 1;
    }
    for (let i = baseNumber; i >= 1; i -= Math.floor(len / 3)) {
        for (let j = i; j < len; j += i) {
            for (let z = j; z >= 0 && arr[z - 1] > arr[z]; z -= i) {
                let temp = arr[z - 1];
                arr[z - 1] = arr[z];
                arr[z] = temp;
            }
        }
    }
    return arr;
}
//console.log(shellSort([5, 4, 3, 2, 1]));

//堆栈排序
//原理利用堆的特性
//大顶堆：顶点大于等于左右节点、然后利用冒泡原理每次将顶点移动到边界值

function heapSort(arr) {

    makeHeap(arr);
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        swap(arr, 0, i);
        makeBigHeap(arr, 0, --len);
    }
    return arr;
}

function makeBigHeap(arr, i, len) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if (left < len && arr[left] > arr[max]) {
        max = left;
    }
    if (right < len && arr[right] > arr[max]) {
        max = right;
    }
    if (max !== i) {
        swap(arr, i, max);
        makeBigHeap(arr, max, len);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function makeHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        makeBigHeap(arr, i, arr.length);
    }
}

console.log(heapSort([5, 4, 3]));