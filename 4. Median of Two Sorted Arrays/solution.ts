function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const array = [... nums1, ... nums2].sort((a, b) => a - b);
    const half = array.length / 2;

    if (half % 1) {
        return array[half - 0.5];
    } else {
        return (array[half - 1] + array[half]) / 2;
    }
};