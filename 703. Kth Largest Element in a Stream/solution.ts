class KthLargest {
    private nums: number[];
    private k;

    constructor(k: number, nums: number[]) {
        this.nums = [... nums].sort((a, b) => b - a);
        this.k = k;
    }

    add(val: number): number {
        let left = 0;
        let right = this.nums.length;

        while (left < right) {
            const middle = (left + right) >> 1;
            if (this.nums[middle] < val) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }

        this.nums.splice(left, 0, val);
        return this.nums[this.k-1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */