function isValid(s: string): boolean {
    const array: string[] = s.split('');
    let stack: string[] = [];

    const leftSymbol = ["(", "[", "{"];
    const rightSymbol = [")", "]", "}"];

    for (let i = 0; i < array.length; i++) {
        if (rightSymbol.includes(array[i])) {
            if (rightSymbol.indexOf(array[i]) === leftSymbol.indexOf(stack[stack.length-1])) {
                stack.pop();
                continue;
            }
        }

        stack.push(array[i]);
    }

    return (stack.length === 0);
};
