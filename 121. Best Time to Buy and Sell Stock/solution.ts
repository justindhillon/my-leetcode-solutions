function maxProfit(prices: number[]): number {
    let min = prices[0];
    let max = 0;

    for (const price of prices) {
        if (price < min) min = price;
        if (price - min > max) max = price - min;
    }

    return max;
};