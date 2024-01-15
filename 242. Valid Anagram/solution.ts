function isAnagram(s: string, t: string): boolean {
    const s_array = s.split('');
    const t_array = t.split('');

    const s_sorted = s_array.sort().join('');
    const t_sorted = t_array.sort().join('');
    
    return s_sorted === t_sorted;
};
