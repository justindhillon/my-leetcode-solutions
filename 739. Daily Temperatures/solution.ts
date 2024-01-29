function dailyTemperatures(temperatures: number[]): number[] {
    let answer: number[] = Array(temperatures.length).fill(0);
    const tempStack: [number, number][] = [];

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        while (tempStack.length && tempStack[tempStack.length-1][1] < temp) {
            const day = tempStack.pop()[0];
            answer[day] = i - day;
        }

        tempStack.push([i, temp]);
    }

    return answer;
};
