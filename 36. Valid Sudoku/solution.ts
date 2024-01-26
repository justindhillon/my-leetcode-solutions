function isValidSudoku(board: string[][]): boolean {
    const set = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let v = 0; v < board.length; v++) {
            const cell = board[i][v];
            if (cell === ".") continue;

            const row = `row: ${i} value: ${cell}`
            const column = `column: ${v} value: ${cell}`
            const boxNum = Math.floor(i/3)*3 + Math.floor(v/3)
            const box = `box: ${boxNum} value: ${cell}`

            if (set.has(row) || set.has(column) || set.has(box)) {
                return false;
            } else {
                set.add(row).add(column).add(box);
            }
        }
    }

    return true;
};
