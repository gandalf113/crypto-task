import React, { useEffect, useState, useContext } from 'react'
import { CoinSelectorContext, CoinSelectorContextType } from '../context/coin-selector-context';
import useHttp from '../hooks/use-http';
import { filterCoins } from '../utils/general-utils';
import { Coin } from '../utils/types';

const Sidebar = () => {
    const { toggleCoinSelection, isCoinSelected } = useContext<CoinSelectorContextType>(CoinSelectorContext);

    const [coins, isLoading] = useHttp('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln') as [Array<Coin>, boolean];

    const [filteredCoins, setFilteredCoins] = useState<Array<Coin>>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setFilteredCoins(filterCoins(coins, query));
    }, [coins, query]);

    return (
        <aside className='fixed left-0 top-0 h-screen lg:w-1/4 bg-zinc-800 text-zinc-50 py-8 lg:block hidden'>
            <div className='px-4'>
                <input
                    placeholder='Search cryptocurrencies...'
                    className='bg-zinc-900 p-2 rounded w-full text-zinc-50'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className='mt-4 px-4 pb-8 overflow-y-scroll h-full w-full'>
                {isLoading ?
                    // If coins are being loaded, show some loading skeleton
                    [...Array(10)].map((e, i) => <div className='p-2 my-2 h-10 w-full bg-zinc-900 opacity-25 animate-pulse rounded' />)
                    :
                    // Once it loads, show the coins
                    filteredCoins.map(coin => (
                        <button
                            key={coin.id}
                            className={`p-2 my-2 w-full text-zinc-100 rounded flex items-center gap-x-2 ${!isCoinSelected(coin) ? 'bg-zinc-800 hover:bg-zinc-900' : 'bg-zinc-900'}`}
                            onClick={() => toggleCoinSelection(coin)}
                            data-testid={`sidebar-item`}>
                            <img src={coin.image} alt={coin.name} className='w-8 h-8' />
                            <h3>{coin.name}</h3>
                        </button>
                    ))}
            </div>
        </aside>
    )
}

export default Sidebar