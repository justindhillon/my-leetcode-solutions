function search(nums: number[], target: number): number {
    let low = 0; 
    let high = nums.length-1;

    while (low < high) {
        let mid = low + Math.floor((high-low+1)/2)
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }

    if (nums[low] === target) {
        return low;
    } else {
        return -1;
    }
};
