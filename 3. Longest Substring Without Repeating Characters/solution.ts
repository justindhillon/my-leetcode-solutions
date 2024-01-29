function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let charSet = new Set();
    let best = 0;

    for (const char of s.split('')) {
        while (charSet.has(char)) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(char);
        best = Math.max(charSet.size, best);
    }

    return best;
};
