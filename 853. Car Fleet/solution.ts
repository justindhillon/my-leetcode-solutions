function carFleet(target: number, position: number[], speed: number[]): number {
    let array: [number, number][] = [];
    
    for (const i in position) {
        array.push([position[i], speed[i]]);
    }

    array = array.sort((a, b) => b[0] - a[0]);

    for (const i in array) {
        const [start, speed] = array[i];
        const end = (target - start) / speed;
        array[i][1] = end;
    }

    let fleetSpeed = array[0][1];
    let fleets = 1;

    for (const [start, speed] of array) {
        if (fleetSpeed < speed) {
            fleets++;
            fleetSpeed = speed;
        }
    }

    return fleets;
};
