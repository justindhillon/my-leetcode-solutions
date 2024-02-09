function characterReplacement(s: string, k: number): number {
    const map = new Map();
    let best = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Add char to map
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }

        while (k < i - left + 1 - Math.max(... map.values())) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        best = Math.max(best, i - left + 1);
    }

    return best;
};