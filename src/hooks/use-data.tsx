import React, { useMemo } from 'react';
import { getDistinctColor, getTimestamps } from '../utils/general-utils';
import { Coin, MarketChartPoint } from '../utils/types';
import { ChartData } from 'chart.js';

const useData = (marketData: MarketChartPoint[][], selectedCoins: Coin[]) => {
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