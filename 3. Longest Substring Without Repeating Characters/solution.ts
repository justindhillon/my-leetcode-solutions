function lengthOfLongestSubstring(s: string): number {
    let window = [];
    let best = 0;

    for (let i = 0; i < s.length; i++) {
        while (window.includes(s[i])) {
            window.shift();
        }

        window.push(s[i]);
        best = Math.max(best, window.length);
    }

    return best;
};
