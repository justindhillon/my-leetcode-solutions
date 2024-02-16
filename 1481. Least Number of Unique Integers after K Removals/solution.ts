function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const map = new Map();

    for (const num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }

    let sortedNums = Array.from(map.values()).sort((a, b) => a - b);
    let removel = 0;

    for (const num of sortedNums) {
        if (num <= k) {
            k -= num;
            removel++
        }
    }

    return sortedNums.length - removel;
};