function topKFrequent(nums: number[], k: number): number[] {
    // Turn nums into map
    const map = new Map();
    for (const num of nums) {
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }

    return Array.from(map)
        .sort((a, b) => b[1] - a[1])    // Sort by decending order
        .slice(0, k)                    // Only keep first k arrays (the biggest ones)
        .map(v => v[0]);                // Format output
}
