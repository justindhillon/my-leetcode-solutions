function minWindow(s: string, t: string): string {
	const map = new Map();

	for (const char of t) {
		if (map.has(char)) {
			map.set(char, map.get(char)+1);
		} else {
			map.set(char, 1);
		}
	}

	let left: number = 0;
	let best: string = "";

	for (let i = 0; i < s.length; i++) {
        const char = s[i];
		
		if (map.has(char))
			map.set(char, map.get(char)-1);

		while (Array.from(map.values()).every(value => value < 1)) {
            if (best == "" || best.length > i - left)
			    best = s.substring(left, i+1);

			if (map.has(s[left]))
				map.set(s[left], map.get(s[left])+1);

            left++;
		}	
	}

	return best;
};
