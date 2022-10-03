import { getCoinMarketChart, getCurrentCoinPrices } from '../utils/currency-utils';
import { SAMPLE_COINS } from '../utils/test-utils';

describe("test getting the market chart data", () => {
    const mockResponse = {
        "prices": [
            [1664692309195, 6525.196502816177],
            [1664692561826, 6517.240634755667],
            [1664692824126, 6523.876925182717],
            [1664693207580, 6508.448227422341],
        ],
        "market_caps": [
            [1664692309195, 785889351356.5667],
            [1664692561826, 788056181502.47],
            [1664692824126, 787896814453.4359],
            [1664693207580, 787896814453.4359],
            [1664693402358, 786236761590.465],
        ],
        "total_volumes": [
            [1664692309195, 24724323065.874363],
            [1664692561826, 24772647324.223484],
            [1664692824126, 24786714071.43281],
            [1664693207580, 24763909185.71678]
        ]
    }

    /**
     * Mock the fetch function
     */
    beforeEach(() => {
        const mockSuccessResponse = mockResponse;
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        var globalRef: any = global;
        globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    })

    test("test that the market chart is structured as expected", () => {
        expect.assertions(2);

        return getCoinMarketChart('bitcoin', 'pln', 1).then(chart => {
            expect(chart[0]).toHaveProperty('timestamp');
            expect(chart[0]).toHaveProperty('price');
        });
    });


    test("test that the market chart values are correct", () => {
        expect.assertions(4);

        return getCoinMarketChart('bitcoin', 'pln', 1).then(chart => {
            expect(chart[0]['timestamp']).toBe(1664692309195);
            expect(chart[0]['price']).toBe(6525.196502816177);

            expect(chart[1]['timestamp']).toBe(1664692561826);
            expect(chart[1]['price']).toBe(6517.240634755667);
        });
    })
});


describe("test getting the current prices", () => {
    const mockResponse = {
        "bitcoin": { "pln": 94694, "usd": 19209.03 },
        "ethereum": { "pln": 6374.5, "usd": 1293.09 },
        "tether": { "pln": 4.93, "usd": 0.999644 }
    }

    /**
     * Mock the fetch function
     */
    beforeEach(() => {
        const mockSuccessResponse = mockResponse;
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        var globalRef: any = global;
        globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    })


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
});
