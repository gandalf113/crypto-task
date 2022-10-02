import { Coin, MarketChartPoint } from "./types";

/**
 * Decimates an array. Useful for optimizing
 * the data before plotting on the chart.
 * @param {Array} arr
 * @param {number} passes
 * @param {number} fidelity
 * @returns decimated array
 */
export function decimateArray(arr: Array<unknown>, passes: number = 1, fidelity: number = 2): Array<unknown> {
    let tmpArr = arr.filter((_, index) => index % fidelity === 0);
    passes--;
    if (passes) {
        tmpArr = decimateArray(tmpArr, passes, fidelity);
    }
    return tmpArr;
}


/**
 * Returns a distinct hex color for a number ranged 0 to 4
 * @param {number} index - number ranging from 0 to 4
 * @returns {string} unique color (hex string)
 */
export const getDistinctColor = (index: number): string => {
    const green = "#1DCF00"
    const pink = "#CF00A2"
    const blue = "#0091CF"
    const orange = "#CF3200"
    const yellow = "#CFAE00"

    const colorIndexMap: { [index: number]: string } = {
        0: green,
        1: pink,
        2: blue,
        3: orange,
        4: yellow
    }

    return colorIndexMap[index];
}

/**
 * Filters list of coins by query
 */
export const filterCoins = (coins: Coin[], query: string) => {
    if (query.trim() === "") return coins;
    return coins.filter(coin => coin.name.toLowerCase().includes(query.toLowerCase()));
}


/**
 * Finds and returns the longest array of timestamps
 * from the marketData array, to be used as chart
 * x axis labels
 */
export const getTimestamps = (marketData: Array<Array<MarketChartPoint>>): Array<string> => {
    // Quit if there's no market data
    if (marketData.length === 0) return [];

    // Find the longest market chart
    const lengths = marketData.map(a => a.length);
    const index = lengths.indexOf(Math.max(...lengths));

    const longestMarketChart = marketData[index];

    // Extract the timestamps
    const timestamps = longestMarketChart.map(point => new Date(point.timestamp).toLocaleTimeString());

    return timestamps;
}