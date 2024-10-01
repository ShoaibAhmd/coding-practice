function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        const midElement = nums[mid];
        const rightToMid = nums[mid + 1];

        // Log the current state

        if (midElement > rightToMid) {
            right = mid; // Move towards the left
        } else {
            left = mid + 1; // Move towards the right
        }
    }

    return left; // left and right will be equal, pointing to the peak element
}

// Example test case
findPeakElement([1, 2, 3, 4, 5]);
