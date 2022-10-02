import { decimateArray } from "./general-utils"
import { Coin, MarketChartPoint } from "./types";

/**
 * Returns an array of points containing the coin
 * price at a given timestamp (in ms since epoch)
 */
export const getCoinMarketChart = async (coin_id: string, vs_currency: string, decimation: number): Promise<Array<MarketChartPoint>> => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?id=${coin_id}&vs_currency=${vs_currency}&days=1`);
    const data = await res.json();

    const marketChart = data.prices.map((point: number[]) => ({
        timestamp: point[0],
        price: point[1]
    }));

    return decimateArray(marketChart, 1, decimation) as Array<MarketChartPoint>;
}

/**
 * Gets prices in pln and usd for every selected coin
 */
export const getCurrentCoinPrices = async (selectedCoins: Array<Coin>) => {
    const paramIds = selectedCoins.map(coin => coin.id).join(',');

    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${paramIds}&vs_currencies=pln,usd`);
    console.log("HERE: ")
    console.log(res)
    const data = await res.json();

    return data;
}
