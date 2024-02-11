function checkInclusion(s1: string, s2: string): boolean {
    let window = "";

    for (const char of s2) {
        if (!s1.length) 
            return true;

        while (!s1.includes(char) && window.length) {
            s1 += window[0];
            window = window.slice(1);
        }

        if (s1.includes(char)) {
            window += char;
            s1 = s1.replace(char, '');
        }
    }

    return !s1.length;
};