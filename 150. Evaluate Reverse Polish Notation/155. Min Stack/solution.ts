function evalRPN(tokens: string[]): number {
    const symbols = ['+', '-', '*', '/'];
    let stack: number[] = [];
    for (let i = 0; i < tokens.length; i++) {
        if (symbols.includes(tokens[i])) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            let answer;
            
            switch (tokens[i]) {
                case '+': 
                    answer = num1 + num2;
                    break;
                case '-': 
                    answer = num1 - num2;
                    break;
                case '*': 
                    answer = num1 * num2;
                    break;
                case '/': 
                    answer = Math.trunc(num1 / num2);
                    break;
            }
            stack.push(answer);
        } else {
            stack.push(parseFloat(tokens[i]));
        }
    }

    return stack[0];
};
