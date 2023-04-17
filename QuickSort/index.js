var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    else {
        var pivot_1 = array[0];
        var less = array.slice(1).filter(function (item) { return item <= pivot_1; });
        var greater = array.slice(1).filter(function (item) { return item > pivot_1; });
        return __spreadArray(__spreadArray(__spreadArray([], quickSort(less), true), [pivot_1], false), quickSort(greater), true);
    }
}
var arr = [1, 6, 4, 8, 0, 2, 6, 9, 7];
console.log(quickSort(arr));
