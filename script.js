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

// // 2418. Sort the People
// const sortPeople = function (names, heights) {
//   const map = new Map();
//   const peoples = new Array(heights.length);

//   for (let i = 0; i < heights.length; i++) {
//     map.set(heights[i], names[i]);
//   }

//   heights.sort((a, b) => b - a);

//   for (let i = 0; i < heights.length; i++) {
//     peoples[i] = map.get(heights[i]);
//   }

//   return peoples;
// };
// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

// // 867. Transpose Matrix
// const transpose = function (matrix) {
//   const ans = new Array(matrix[0].length);

//   for (let i = 0; i < ans.length; i++) {
//     ans[i] = new Array(matrix.length);
//   }

//   for (let i = 0; i < ans.length; i++) {
//     for (let j = 0; j < ans[i].length; j++) {
//       ans[i][j] = matrix[j][i];
//     }
//   }

//   return ans;
// };
// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// // 48. Rotate Image
// const rotate = function (matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i; j < matrix[i].length; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     let j = 0;
//     let k = matrix[i].length - 1;
//     while (j < k) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[i][k];
//       matrix[i][k] = temp;
//       j++;
//       k--;
//     }
//   }

//   return matrix;
// };
// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// // 58. Length of Last Word
// const lengthOfLastWord = function (s) {
//   let strArray = s.trim().split(" ");
//   return strArray[strArray.length - 1].length;
// };
// console.log(lengthOfLastWord("Hello World"));

// // 125. Valid Palindrome
// const isPalindrome = function(s){
//   const str = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reverseString = str.split("").reverse().join("");
//   return str === reverseString ? true : false;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// // 125. Valid Palindrome
// const isPalindrome = function (s) {
//   const str = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
//   let i = 0;
//   let j = str.length - 1;

//   while (i < j) {
//     if (str.charAt(i) === str.charAt(j)) {
//       i++;
//       j--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// // 202. Happy Number
// const isHappy = function (n) {
//   let arr = new Array();
//   while (n !== 1) {
//     let sum = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       sum = sum + rem * rem;
//       n = Math.floor(n / 10);
//     }

//     if (sum === 1) return true;
//     if (arr.includes(sum)) return false;
//     else arr.push(sum);

//     n = sum;
//   }

//   return true;
// };
// console.log(isHappy(19));

// // 202. Happy Number
// const isHappy = function (n) {
//   const set = new Set();

//   while (n !== 1) {
//     let sum = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       sum = sum + rem * rem;
//       n = Math.floor(n / 10);
//     }

//     if (sum === 1) return true;
//     if (set.has(sum)) return false;
//     else set.add(sum);

//     n = sum;
//   }

//   return true;
// };
// console.log(isHappy(19));

// // 242. Valid Anagram
// const isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("")
//     ? true
//     : false;
// };
// console.log(isAnagram("car", "arc"));

// // 242. Valid Anagram
// const isAnagram = function (s, t) {
//   const frequencyArray = new Array(123).fill(0);

//   if (s.length !== t.length) {
//     return false;
//   }

//   for (let i = 0; i < s.length; i++) {
//     const asciValue = s.charCodeAt(i);
//     frequencyArray[asciValue] = frequencyArray[asciValue] + 1;
//   }

//   for (let i = 0; i < t.length; i++) {
//     const asciValue = t.charCodeAt(i);
//     frequencyArray[asciValue] = frequencyArray[asciValue] - 1;
//   }

//   for (let i = 0; i < frequencyArray.length; i++) {
//     if (frequencyArray[i] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isAnagram("state", "taste"));

// // 258. Add Digit
// const addDigit = function (num) {
//   if (num === 0) return 0;
//   else if (num % 9 === 0) return 9;
//   else return num % 9;
// };
// console.log(addDigit(38));

// // 283. Move Zeroes
// const moveZeroes = function (nums) {
//   let nonZero = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[nonZero] = nums[i];
//       nonZero++;
//     }
//   }

//   for (let i = nonZero; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   return nums;
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// // 28. Find the Index of the First Occurrence in a String
// const strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };
// console.log(strStr("leetcode", "leeto"));

// 121. Best Time to Buy and Sell Stock
const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
