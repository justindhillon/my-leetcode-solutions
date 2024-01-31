function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const set: Set<string> = new Set();

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                set.add(JSON.stringify([nums[i], nums[left], nums[right]]));
            } else if (sum > 0) {
                right--;
                continue;
            }
            left++;
        }
    }

    return Array.from(set, (s => JSON.parse(s)));
}
