function isPalindrome(s: string): boolean {
    const word = s.toLowerCase()
                    .replace(/[\W_]/g, "");

    let left = 0;
    let right = word.length-1;

    while (left <= right) {
        if (word[left] != word[right]) return false;
        left++;
        right--;
    }

    return true;
};
