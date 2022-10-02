import { useContext, useEffect, useMemo, useState } from 'react';
import Chart from './chart.component';
import { CoinSelectorContext } from '../context/coin-selector-context';
import { SettingsContext, SettingsContextType } from '../context/settings-context';
import { getCoinMarketChart, getCurrentCoinPrices } from '../utils/currency-utils';
import { getDistinctColor, getTimestamps } from '../utils/general-utils';
import { ChartData, CoinPrices, MarketChartPoint } from '../utils/types';
import CoinTag from './coin-tag.component';

/**
 * Main view in the application. It shows the chart and current
 * prices of user selected coins.
 */
const MainView = () => {
    // const { modals, toggleModal } = useContext(UIContext);
    const { vsCurrency, decimation } = useContext<SettingsContextType>(SettingsContext);

    const { selectedCoins, toggleCoinSelection } = useContext(CoinSelectorContext);
    const [marketData, setMarketData] = useState<MarketChartPoint[][]>([]); // Chart Y axis (all coins)

    const [coinPrices, setCoinPrices] = useState<CoinPrices>({}); // Current coin prices

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

        getCurrentCoinPrices(selectedCoins).then(prices => setCoinPrices(prices));

    }, [selectedCoins, vsCurrency, decimation]);


    // Data that will be displayed on the chart
    const data = useMemo<ChartData>(() => ({
        labels: getTimestamps(marketData),
        datasets: marketData.map((coinData, index) => (
            {
                data: coinData.map((point: MarketChartPoint) => ({ x: point.timestamp, y: point.price })),
                borderColor: getDistinctColor(index),
                hoverRadius: 4,
                hoverBorderWidth: 5
            }
        ))
    }), [marketData])

    const openSettingsModal = () => {};
    const openBrowseCurrenciesModal = () => {};

    return (
        <div>
            <div className='flex items-stretch justify-between gap-x-10 mb-4'>
                {/* Heading */}
                <h1 className='text-zinc-300'>Coin prices for past 24 hours</h1>

                <div className='flex items-center gap-x-3'>
                    {/* Browse currencies button [SMALL SCREEN ONLY] */}
                    <button
                        id='browse-button'
                        onClick={openBrowseCurrenciesModal}
                        className='text-2xl text-zinc-300 lg:hidden block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34}
                            className="fill-zinc-300"
                            viewBox="0 0 16 16">
                            <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                        </svg>
                    </button>

                    {/* Settings button */}
                    <button
                        id='settings-button'
                        onClick={openSettingsModal}
                        className='group text-2xl text-zinc-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28}
                            className="fill-zinc-300 group-hover:animate-spin" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* The chart */}
            <Chart data={data} vsCurrency={vsCurrency} data-testid='chart' />

            {/* Selected currencies with distinct colors */}
            <div className='flex flex-wrap items-center gap-2 mt-6 select-none'>
                {selectedCoins.map((coin, index) => (
                    <CoinTag
                        coin={coin}
                        color={getDistinctColor(index)}
                        toggleCoinSelection={toggleCoinSelection}
                    />
                ))}
            </div>

            {/* Current coin prices */}
            <div className='text-zinc-300 my-3'>
                {selectedCoins.length > 0 && <h1 className='text-zinc-50'>Current prices</h1>}

                {selectedCoins.map((coin, index) => (
                    coinPrices[coin.id] && <div key={coin.id} className='flex items-center gap-2'>
                        <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: getDistinctColor(index) }} />

                        <span>1 {coin.name} = {coinPrices[coin.id][vsCurrency]} {vsCurrency.toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainView