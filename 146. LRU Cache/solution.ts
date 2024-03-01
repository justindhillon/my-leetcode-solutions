class LRUCache {
    private map;
    private capacity;
    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        const value = this.map.get(key);

        if (value === undefined) 
            return -1;

        this.put(key, value);
        return value;
    }

    put(key: number, value: number): void {
        if (this.map.size >= this.capacity && !this.map.has(key)) {
            const target = this.map.keys().next().value;
            this.map.delete(target);
        }

        this.map.delete(key);
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */