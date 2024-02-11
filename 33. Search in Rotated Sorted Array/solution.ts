function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;

    while (left <= right) {
        const middle = Math.floor((left+right)/2);
        
        if (nums[middle] === target)
            return middle

        if (nums[left] <= nums[middle]) {
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return -1; 
};
