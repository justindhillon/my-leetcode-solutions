function indexOfMatrix(matrix: number[][], index: number): number{
    const width: number = matrix[0].length;

    const x = index % width;
    const y = Math.floor(index / width);

    return matrix[y][x];
}

function searchMatrix(matrix: number[][], target: number): boolean {
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;

    while (left <= right) {
        const middle = Math.floor((right + left)/2);
        const num = indexOfMatrix(matrix, middle);

        if (num == target) {
            return true;
        } else if (num < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
};
