function subsets(nums: number[]): number[][] {
    const answer = [];

    function findSubset(index: number, subset: number[]) {
        answer.push([... subset]);
        if (index === nums.length) 
            return;
        
        for (let i = index; i < nums.length; i++) {
            findSubset(i + 1, [... subset, nums[i]]);
        }
    }

    findSubset(0, []);
    return answer;
};
