function largestPerimeter(nums: number[]): number {
    while (nums.length > 2) {
        const biggestNum = Math.max(... nums);
        const sumOfNums = [... nums].reduce((a, b) => a + b, 0);
        const sumOfNumsWithoutBiggest = sumOfNums - biggestNum;

        if (biggestNum >= sumOfNumsWithoutBiggest) {
            nums.splice(nums.indexOf(biggestNum), 1);
            continue;
        }
        
        return sumOfNums
    }
    
    return -1;
};