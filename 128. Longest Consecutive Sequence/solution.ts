function longestConsecutive(nums: number[]): number {
    nums = Array.from(new Set(nums));   // Remove duplicate numbers
    nums = nums.sort((a, b) => a - b);  // Order small to big

    const map = new Map();
    map.set(null, 0); // Edge case with empty list

    for (let i = 0; i < nums.length; i++) {
        nums[i] -= i;

        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } else {
            map.set(nums[i], 1);
        }
    }

    return Math.max(... map.values());
};
