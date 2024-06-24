//Question 48
//Combining Arrays with Spread Operator:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [15000, 5000, 30000];
var price2 = [20000, 55000, 40000];
var combinePrice = __spreadArray(__spreadArray([], price1, true), price2, true).sort(function (first, second) { return first - second; });
console.log(combinePrice);
