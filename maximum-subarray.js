/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Initialize current and global max
    let currentMax = nums[0];
    let globalMax = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // Update current max to either the current number or the sum of current max + current number
        const currentPlusNum = currentMax + num;
        currentMax = Math.max(num, currentPlusNum);

        console.log(`current max ${currentMax}`)

        // Update global max if current max is greater
        globalMax = Math.max(globalMax, currentMax);

        console.log(`global max ${globalMax}`)
    }

    return globalMax;
};

// Example Usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
