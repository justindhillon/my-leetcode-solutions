function generateParenthesis(n: number): string[] {
    let size = n*2;
    let parenthesis: [string, number, number][] = [["", 0, 0]];
    let answer: string[] = [];

    while (parenthesis.length) {
        const [string, left, right] = parenthesis.pop();
        
        if (string.length == size) {
            answer.push(string);
            continue;
        }
        
        if (left != right) parenthesis.push([string + ")", left, right+1]);
        if (left != n) parenthesis.push([string + "(", left+1, right]);
    }

    return answer;
};
