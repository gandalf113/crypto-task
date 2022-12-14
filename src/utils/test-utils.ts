import { Coin } from "./types";

export const SAMPLE_MARKET_DATA = [
    [
        { price: 6599.666941355377, timestamp: 1664395315279 },
        { price: 6596.411843432581, timestamp: 1664395642181 },
        { price: 6607.289691797806, timestamp: 1664395875453 },
        { price: 6633.328147039095, timestamp: 1664396163747 },
        { price: 6650.173849031618, timestamp: 1664396418486 },
        { price: 6648.6042576723175, timestamp: 1664396767909 },
        { price: 6659.124913041158, timestamp: 1664397029829 },
        { price: 6641.9811172661, timestamp: 1664397340802 },
        { price: 6623.145403705362, timestamp: 1664397590006 },
        { price: 6628.336539790011, timestamp: 1664397943462 },
        { price: 6639.207576045392, timestamp: 1664398199322 },
        { price: 6662.91047123475, timestamp: 1664398534641 }
    ],
    [
        { price: 6596.411843432581, timestamp: 1664395642181 },
        { price: 6607.289691797806, timestamp: 1664395875453 },
        { price: 6633.328147039095, timestamp: 1664396163747 },
        { price: 6650.173849031618, timestamp: 1664396418486 },
        { price: 6648.6042576723175, timestamp: 1664396767909 },
        { price: 6659.124913041158, timestamp: 1664397029829 },
        { price: 6641.9811172661, timestamp: 1664397340802 },
        { price: 6623.145403705362, timestamp: 1664397590006 },
        { price: 6628.336539790011, timestamp: 1664397943462 },
        { price: 6639.207576045392, timestamp: 1664398199322 },
        { price: 6662.91047123475, timestamp: 1664398534641 },
        { price: 6657.116290528185, timestamp: 1664398808162 },
        { price: 6652.632734011734, timestamp: 1664399115202 },
        { price: 6665.943190618821, timestamp: 1664399493715 },
        { price: 6656.048156333063, timestamp: 1664399820015 },
        { price: 6658.135957429339, timestamp: 1664399992148 },
        { price: 6677.812331316261, timestamp: 1664400356285 },
        { price: 6678.975528763015, timestamp: 1664400602701 },
        { price: 6686.745781169584, timestamp: 1664400923652 },
        { price: 6677.980793628894, timestamp: 1664401244930 },
        { price: 6668.68237816129, timestamp: 1664401510363 },
        { price: 6642.466989926259, timestamp: 1664401871311 },
        { price: 6647.029427070875, timestamp: 1664402223325 },
        { price: 6646.363984855623, timestamp: 1664402478457 },
        { price: 6646.266176100195, timestamp: 1664402757249 },
        { price: 6636.394365820082, timestamp: 1664403011755 },
        { price: 6641.015999490351, timestamp: 1664403342522 },
        { price: 6637.147326080478, timestamp: 1664403655559 },
        { price: 6634.1355694903905, timestamp: 1664403949642 },
        { price: 6625.951035970138, timestamp: 1664404237956 },
        { price: 6639.2731105428165, timestamp: 1664404555471 },
        { price: 6638.405405884409, timestamp: 1664404855776 },
        { price: 6635.023775384225, timestamp: 1664405105566 },
        { price: 6609.99132994862, timestamp: 1664405446238 },
        { price: 6620.84109638398, timestamp: 1664405745230 },
        { price: 6622.3697405566945, timestamp: 1664406026831 },
        { price: 6634.318006149105, timestamp: 1664406417777 },
        { price: 6636.059407011334, timestamp: 1664406668557 },
        { price: 6657.216002363636, timestamp: 1664407001805 },
        { price: 6649.330345153419, timestamp: 1664407266994 },
        { price: 6651.846224731509, timestamp: 1664407521085 },
        { price: 6650.186548524606, timestamp: 1664407777839 },
        { price: 6628.475465115526, timestamp: 1664408255537 },
        { price: 6619.936339204511, timestamp: 1664408504860 },
        { price: 6637.982225762494, timestamp: 1664408828466 },
        { price: 6632.963904636155, timestamp: 1664408983376 },
        { price: 6640.955959378247, timestamp: 1664409379199 },
        { price: 6643.863653246901, timestamp: 1664409655768 }
    ]
];

export const SAMPLE_COINS: Array<Coin> = [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 96250,
    },
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "current_price": 6617.99,
    },
    {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
        "current_price": 4.95
    },
]