// // 1. Two Sum
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));

// // 9. Palindrome Number
// const isPalindrome = function (x) {
//   let copyNumber = x;
//   let sum = 0;
//   while (x > 0) {
//     let rem = x % 10;
//     sum = sum * 10 + rem;
//     x = Math.floor(x / 10);
//   }
//   return sum === copyNumber ? true : false;
// };
// console.log(isPalindrome(121));

// // 9. Palindrome Number
// const isPalindrome = function (x) {
//   const reverseNumber = Number(x.toString().split("").reverse().join(""));
//   return x === reverseNumber ? true : false;
// };
// console.log(isPalindrome(121));

// // 26. Remove Duplicates from Sorted Array
// const removeDuplicates = function (nums) {
//     if(nums.length === 0) return 0;
//     let unique = 0;
//     for(let i = 1; i<nums.length; i++){
//         if(nums[unique] !== nums[i]){
//             unique++;
//             nums[unique] = nums[i];
//         }
//     }
//     return unique + 1;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 27. Remove Element
const removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([3, 2, 2, 3], 3));
