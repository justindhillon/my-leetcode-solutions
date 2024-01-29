function generateParenthesis(n: number): string[] {
    // combination, # of open parentheses, # of closed parentheses
    let stack: [string, number, number][] = [["", n, n]];
    let answer = [];

    while (stack.length) { // Run until stack is empty
        const [combination, open, close] = stack.pop();
        if (!open && !close) {
            // Combination complete, add to answer
            answer.push(combination);
        } else {
            // Combination incomplete, add all posibilities to stack
            if (open === close) {
                stack.push([
                    combination + "(",
                    open-1,
                    close]);
            } else if (!open) {
                stack.push([
                    combination + ")",
                    open,
                    close-1]);
            } else {
                stack.push([
                    combination + "(",
                    open-1,
                    close]);
                stack.push([
                    combination + ")",
                    open,
                    close-1]);
            }
        }
    }

    return answer;
};
