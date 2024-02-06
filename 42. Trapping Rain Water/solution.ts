function trap(height: number[]): number {
    // By know the tallest column left and right of a column,
    // we can know how much water that column can store
    let tallestLeft: number[] = [];
    let tallestRight: number[] = [];
    let max: number = 0;

    for (let i = 0; i < height.length; i++){
        tallestLeft.push(max);
        max = Math.max(max, height[i]);
    }

    max = 0;

    for (let i = height.length-1; i > -1; i--){
        tallestRight.push(max);
        max = Math.max(max, height[i]);
    }

    tallestRight.reverse();

    // Now we add the smaller number left and right of
    // the column minus the hight of the column to the answer
    let answer: number = 0;
    for (let i = 0; i < height.length; i++) {
        const water: number = Math.min(tallestLeft[i], tallestRight[i]) - height[i];
        if (water > 0) answer += water;
    }

    return answer;
};
