import React, { useState, useMemo, useEffect } from 'react';
import { getDistinctColor, getTimestamps } from '../utils/general-utils';
import { Coin, MarketChartPoint } from '../utils/types';
import { ChartData } from 'chart.js';
import { getCoinMarketChart } from '../utils/currency-utils';

const useData = (selectedCoins: Coin[], vsCurrency: string, decimation: number) => {
    const [marketData, setMarketData] = useState<MarketChartPoint[][]>([]); // Chart Y axis (all coins)

    useEffect(() => {
        /**
         * Get and set 24 hour market data for every selected coin
         */
        const getMarketDataForEveryCoin = async () => {
            const updatedMarketData = []
            for (const coin of selectedCoins) {
                const coinData = await getCoinMarketChart(coin.id, vsCurrency, decimation);
                updatedMarketData.push(coinData);
            }
            setMarketData(updatedMarketData);
        }

        getMarketDataForEveryCoin();

    }, [selectedCoins, vsCurrency, decimation]);

    const data = useMemo<ChartData<'line'>>(() => ({
        labels: getTimestamps(marketData),
        datasets: marketData.map((coinData, index) => (
            {
                data: coinData.map((point: MarketChartPoint) => ({ x: point.timestamp, y: point.price })),
                borderColor: getDistinctColor(index),
                hoverRadius: 4,
                hoverBorderWidth: 5,
                label: selectedCoins[index] && selectedCoins[index].name,
            }
        ))
    }), [marketData, selectedCoins]);

    return data;
}

export default useData