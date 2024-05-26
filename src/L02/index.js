// const a: number = 12312;
// console.log(a);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// type User  = {
//   login: string,
//   pass: number | string
// }
// type UniqUser<T> = {
//   login: string,
//   pass: T
// }
// const YoungUser : UniqUser<number> = {
//   login: "Anatolii",
//   pass: 12312412
// }
// const YoungUser2 : UniqUser<string> = {
//   login: "Anatolii",
//   pass: "12312412"
// }
// const YoungUser3 : UniqUser<null> = {
//   login: "Anatolii",
//   pass: null
// }
// console.log(YoungUser);
// console.log(YoungUser2);
// console.log(YoungUser3);
function getDouble(value) {
    if (typeof value === "string") {
        return value + value;
    }
    if (typeof value === "number") {
        return Math.pow(value, 2);
    }
    if (typeof value === "object") {
        if (Array.isArray(value))
            return __spreadArray(__spreadArray([], value, true), value, true);
        return __assign(__assign({}, value), value);
        // for (const qwerty in value) {
        //   // console.log(value[qwerty]);
        //   value.push(value[qwerty])
        // }
        // console.log(value);
    }
    // if
    // if
    // на случай если ничего не сработает
}
// console.log(getDouble("qqqqqD"));
// console.log(getDouble(24312000));
// console.log(getDouble({ name: "Bill" }));
// getDouble({ name: "Bill" });
// console.log(getDouble([1, 2, 3]));
// getDouble([1, 2, 3]);
// console.log({
//   0: 32,
//   1: 32,
//   2: 32,
//   3: 32,
//   length: 4,
// });
// console.dir();
var bool = new Boolean(true);
console.log(bool);
// console.dir(Number);
// console.dir(Number.isNaN("sdfaasd"));
// console.dir(isNaN("fsdafsdfasd"));
