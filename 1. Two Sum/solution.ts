function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        const index = nums.indexOf(pair);

        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
};
