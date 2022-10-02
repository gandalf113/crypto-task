import { getCurrentCoinPrices } from '../utils/currency-utils';
import { SAMPLE_COINS } from '../utils/test-utils';

// TODO: Mock the fetch function

test("test getting coin prices works properly", () => {
    return getCurrentCoinPrices(SAMPLE_COINS).then(prices => {
        expect(prices).toHaveProperty("bitcoin");
        expect(prices).toHaveProperty("ethereum");
        expect(prices).toHaveProperty("tether");
    });
})

test("test currencies have usd and pln", () => {
    return getCurrentCoinPrices(SAMPLE_COINS).then(prices => {
        const btc = prices["bitcoin"];

        expect(btc).toHaveProperty("pln");
        expect(btc).toHaveProperty("usd");
    });
})
