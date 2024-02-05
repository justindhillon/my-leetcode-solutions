function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length-1;
    let best = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right-left);
        best = Math.max(area, best)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return best;
};
