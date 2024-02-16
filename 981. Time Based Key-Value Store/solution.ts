class TimeMap {
    private map: Map<string, [number, string][]>

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (this.map.has(key)) {
            this.map.get(key).push([timestamp, value]);
        } else {
            this.map.set(key, [[timestamp, value]]);
        }
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key))
            return "";
        
        const array = this.map.get(key);
        let left = 0;
        let right = array.length-1;
        let answer = "";

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (array[middle][0] === timestamp)
                return array[middle][1];

            if (array[middle][0] < timestamp) {
                answer = array[middle][1];
            }
            
            if (array[middle][0] < timestamp) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return answer;
    }
}
