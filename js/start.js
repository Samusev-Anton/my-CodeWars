// function makeNegative(num) {
//     if (num > 0) {
//         return (-num);
//     }
//     return (num);
// }
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(5));


//
// function countPositivesSumNegatives(input) {
//     const newArr = [];
//     let posSum = [];
//     let negSum = 0;
//         if (input.length == 0 || input == 0 ) {
//         return newArr;
//         } else {
//             input.forEach(element => {
//                 if (element > 0) {
//                     return posSum.push(element);
//                 }
//                 if (element < 0) {
//                     return negSum += element;
//                 }
//             })
//                 newArr.push(posSum.length, negSum);
//                 return newArr;
//     }
//     };


// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([0]));
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));


// var min = function(list){
//     const minList = Math.min(...list);
//     return minList;
// }

// var max = function(list){
//    const maxList =  Math.max(...list)
//     return maxList;
// }

// console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
// console.log(max([4,6,2,1,9,63,-134,566]));


// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase('hello'));


const reverseSeq = num => {
    let arr = [];
    for (let i = 0; i <= num; i + 1) {
        arr.push(i);
    }
    console.log(arr);
  return arr;
};
reverseSeq(10);