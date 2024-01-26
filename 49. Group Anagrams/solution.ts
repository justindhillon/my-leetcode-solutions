function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    // To find out if two strings are an anagram,
    // We can sort the strings alphabetically
    // If they are the same sorted,
    // Then they are anagrams
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
};
