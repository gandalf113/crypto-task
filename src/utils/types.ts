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