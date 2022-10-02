export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
}

export type MarketChartPoint = {
    timestamp: number,
    price: number
}

export type CoinPrices = {
    [coinId: string]: {
        [currency: string]: number
    }
}

export type ChartData = {
    labels: string[];
    datasets: {
        data: {
            x: number;
            y: number;
        }[];
        borderColor: string;
        hoverRadius: number;
        hoverBorderWidth: number;
    }[];
}