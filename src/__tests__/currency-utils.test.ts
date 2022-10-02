import { getCoinMarketChart, getCurrentCoinPrices } from '../utils/currency-utils';
import { SAMPLE_COINS } from '../utils/test-utils';

test("test getting coin prices works properly", () => {
    expect.assertions(3);
    return getCurrentCoinPrices(SAMPLE_COINS).then(prices => {
        expect(prices).toHaveProperty("bitcoin");
        expect(prices).toHaveProperty("ethereum");
        expect(prices).toHaveProperty("tether");
    });
})

test("test currencies have usd and pln", () => {
    expect.assertions(2);

    return getCurrentCoinPrices(SAMPLE_COINS).then(prices => {
        const btc = prices["bitcoin"];

        expect(btc).toHaveProperty("pln");
        expect(btc).toHaveProperty("usd");
    });
})
