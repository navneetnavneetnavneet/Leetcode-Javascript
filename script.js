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

// // 1. Two Sum  (Efficient way)
// const twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [i, map.get(target - nums[i])];
//     } else {
//       map.set(nums[i], i);
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

// // 27. Remove Element
// const removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };
// console.log(removeElement([3, 2, 2, 3], 3));

// // 492. Construct the Rectangle
// const constructRectangle = function (area) {
//   let width = Math.floor(Math.sqrt(area));
//   while (area % width !== 0) {
//     width--;
//   }
//   let length = area / width;
//   return [length, width];
// };
// console.log(constructRectangle(37));

// // 697. Degree of an Array
// const findShortestSubArray = function(nums) {
//     let frequency = {};
//     let firstIndex = {};
//     let lastIndex = {};
//     for(let i=0; i<nums.length; i++){
//         let num = nums[i];
//         if(firstIndex[num] === undefined){
//             firstIndex[num] = i;
//         }
//         lastIndex[num] = i;
//         frequency[num] = (frequency[num] || 0) + 1;
//     }
//     let degree = Math.max(...Object.values(frequency));
//     let minLength = nums.length;
//     for(let num in frequency){
//         if(frequency[num] === degree){
//             let length = lastIndex[num] - firstIndex[num] + 1;
//             minLength = Math.min(minLength, length);
//         }
//     }
//     return minLength;
// }
// console.log(findShortestSubArray([1, 2, 2, 3, 1]));

// // 2351. First Letter to Appear Twice
// const repeatedCharacter = function(s){
//     const map = new Map();
//     for(let i = 0; i<s.length; i++){
//         const character = s.charAt(i);
//         if(map.has(character)){
//             map.set(character, map.get(character) + 1);
//             if(map.get(character) === 2){
//                 return character;
//             }
//         }else{
//             map.set(character, 1);
//         }
//     }
// }
// console.log(repeatedCharacter("abccbaacz"));

// // 2351. First Letter to Appear Twice
// const repeatedCharacter = function(s){
//     const map = new Map();
//     for(let i=0; i<s.length; i++){
//         const character = s.charAt(i);
//         if(map.has(character)){
//             return character;
//         }else{
//             map.set(character, 1);
//         }
//     }
// }
// console.log(repeatedCharacter("abcbaacz"));

// // 2351. First Letter to Appear Twice
// const repeatedCharacter = function (s) {
//   const set = new Set();
//   for (let i = 0; i < s.length; i++) {
//     const character = s.charAt(i);
//     if (set.has(character)) {
//       return character;
//     } else {
//       set.add(character);
//     }
//   }
// };
// console.log(repeatedCharacter("abcbaacz"));

// 2418. Sort the People
const sortPeople = function (names, heights) {
  const map = new Map();
  const peoples = new Array(heights.length);

  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }

  heights.sort((a, b) => b - a);

  for (let i = 0; i < heights.length; i++) {
    peoples[i] = map.get(heights[i]);
  }
  
  return peoples;
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
