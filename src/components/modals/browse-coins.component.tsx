import React, { useEffect, useState, useContext } from 'react'
import { CoinSelectorContext } from '../../context/coin-selector-context';
import useAutoClose from '../../hooks/use-auto-close';
import useHttp from '../../hooks/use-http';
import { filterCoins } from '../../utils/general-utils';
import { Coin } from '../../utils/types';
import Modal from './base-modal.component';

type Props = {
    handleClose: () => void;
}

/**
 * This modal is meant to replace the sidebar on smaller screens.
 * It will close automatically once the screen width exceeds 786 px.
 */
const BrowseCoinsModal: React.FC<Props> = ({ handleClose }) => {
    const [coins, isLoading] = useHttp('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln') as [Array<Coin>, boolean];

    const [filteredCoins, setFilteredCoins] = useState(coins);
    const [query, setQuery] = useState("");

    const { toggleCoinSelection, isCoinSelected } = useContext(CoinSelectorContext);

    useEffect(() => {
        setFilteredCoins(filterCoins(coins, query));
    }, [coins, query]);

    /**
     * Handle closing the modal when screen size is big enough
     */
    useAutoClose(handleClose, 768);

    return (
        <Modal handleClose={handleClose}>
            <div className='py-4 overflow-clip h-[70vh]'>
                <div className='flex justify-between px-4 mb-4 text-lg'>
                    <h1 className='text-zinc-100'>Select currencies</h1>
                    <button onClick={handleClose} id='close-modal-button'>x</button>
                </div>

                <div className='px-4'>
                    <input
                        placeholder='Search cryptocurrencies...'
                        className='bg-zinc-800 p-2 rounded w-full text-zinc-50'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className='mt-4 px-4 pb-8 overflow-y-scroll h-full w-full'>
                    {isLoading ?
                        // If coins are being loaded, show some loading skeleton
                        [...Array(10)].map((e, i) => <div className='p-2 my-2 h-10 w-full bg-zinc-800 opacity-25 animate-pulse rounded' />)
                        :
                        filteredCoins.map(coin => (
                            <button
                                key={coin.id}
                                className={`p-2 my-2 w-full text-zinc-100 rounded flex items-center gap-x-2 ${!isCoinSelected(coin) ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-zinc-700'}`}
                                onClick={() => toggleCoinSelection(coin)}>
                                <img src={coin.image} alt={coin.name} className='w-8 h-8' />
                                <h3>{coin.name}</h3>
                            </button>
                        ))}
                </div>
            </div>
        </Modal>
    )
}

export default BrowseCoinsModal