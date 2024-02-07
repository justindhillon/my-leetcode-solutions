function largestRectangleArea(heights: number[]): number {
    let smallerLeft: number[] = [];
    let smallerRight: number[] = [];
    let stack: number[][] = [];
    let areas: number[] = [];

    for (let i = 0; i < heights.length; i++) {
        while (stack.length) {
            if (stack[stack.length-1][0] < heights[i]) {
                smallerLeft.push(stack[stack.length-1][1]);
                break;
            }
            stack.pop();
        }
        if (!stack.length) smallerLeft.push(-1);
        stack.push([heights[i], i]);
    }

    heights.reverse();
    stack = [];

    for (let i = 0; i < heights.length; i++) {
        while (stack.length) {
            if (stack[stack.length-1][0] < heights[i]) {
                smallerRight.push(heights.length - stack[stack.length-1][1] - 1);
                break;
            }
            stack.pop();
        }
        if (!stack.length) smallerRight.push(heights.length);
        stack.push([heights[i], i]);
    }

    heights.reverse();
    smallerRight.reverse();

    for (let i = 0; i < heights.length; i++) {
        const maxArea = (smallerRight[i] - smallerLeft[i] - 1) * heights[i];
        areas.push(maxArea);
    }

    return Math.max(... areas);
};
