// let add =  (function () {
//     let sum  = 0 ;  

//     return function sumNumbers (n) {
//         sum += n;
//         sumNumbers.toString = function  () {
//             return sum;
//         };
//         return sumNumbers;
//     }
// })();

function add (num) {
    let a = (x) => add(num + x);
    
    a.valueOf = () => num;
    a.toString = () => num;
    
    return a;
}
console.log(add(1)(6)(-3).valueOf()); 