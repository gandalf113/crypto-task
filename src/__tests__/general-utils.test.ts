import { filterCoins, getTimestamps } from "../utils/general-utils";
import { SAMPLE_MARKET_DATA, SAMPLE_COINS } from "../utils/test-utils";

test("test that filtering currencies by name works", () => {
    const coins = filterCoins(SAMPLE_COINS, "bit")

    expect(coins.length).toBe(1);
    expect(coins[0].name).toBe("Bitcoin");

});

test("test that providing empty query returns without filtering", () => {
    const coins = filterCoins(SAMPLE_COINS, "")

    expect(coins).toEqual(SAMPLE_COINS);
})

test("test that timestamps are generated properly", () => {
    const timestamps = getTimestamps(SAMPLE_MARKET_DATA);

    // Assert that the longer longer array was used to get timestamps
    expect(timestamps.length).toEqual(SAMPLE_MARKET_DATA[1].length);

    // Assert that the date is generated properly
    expect(timestamps[0]).toBe('22:07:22');
});