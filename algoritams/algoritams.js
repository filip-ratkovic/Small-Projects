//      PRIME NUMBERS ///////////// 
// function isPrime(num) {
//     if (num < 2) return false;
//     const limit = Math.sqrt(num);
//     for (let i = 2; i <= limit; ++i) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function getPrimes(start, finish) {
//     let primeNumbers = [];
//     if (start > finish) {
//         [start, finish] = [finish, start];
//     }
//     for (let num = start; num <= finish; num++) {
//         let count = 0;

//         for (let j = 2; j<num; j++) {
//             if(num % j === 0) {
//                 count = 1;
//                 break
//             }
//         }
//         if(num > 1 && count ==0) {
//             primeNumbers.push(num)
//         } 
//     }
//     return primeNumbers
// }
