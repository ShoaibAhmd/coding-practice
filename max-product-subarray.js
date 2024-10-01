// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {

//     let maxProduct = null;
//     // let maxSubArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         let product = 1;

//         for (let j = i; j < nums.length; j++) {
//             product *= nums[j];
//             if (!maxProduct) {
//                 maxProduct = product;
//             }
//             else if (product > maxProduct) {
//                 maxProduct = product;
//                 // maxSubArray = nums.slice(i, j + 1);
//             }
//         }
//     }

//     return maxProduct;
// };

// console.log(maxProduct([-2, 0, -1]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    // Initialize variables
    let maxProduct = nums[0];   // Global max product
    let currentMax = nums[0];   // Max product up to current index
    let currentMin = nums[0];   // Min product up to current index

    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        // If the current number is negative, swap the current max and min
        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax];
        }

        // Update the current max and min products
        currentMax = Math.max(num, currentMax * num);
        currentMin = Math.min(num, currentMin * num);

        // Update the global maximum product
        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
};

// Example Usage
console.log(maxProduct([2, 3, -2, 4])); // Output: 6
