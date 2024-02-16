function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue = []; // Holds indexes
    let biggestInQueue = 0 // Holds the biggest index in window
    const answers = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[queue[queue.length-1]] < nums[i]) {
            queue.pop();
            biggestInQueue = Math.min(biggestInQueue, queue.length);
        }

        if (queue.length && queue[biggestInQueue] < i-k+1) {
            biggestInQueue++;
        }

        queue.push(i);

        if (i > k-2) {
            answers.push(nums[queue[biggestInQueue]]);
        }
    }

    return answers;
};
