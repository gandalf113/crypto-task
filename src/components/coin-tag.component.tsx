import React from 'react'
import { Coin } from '../utils/types'

type Props = {
    coin: Coin,
    color: string,
    toggleCoinSelection: (coin: Coin) => void
}

const CoinTag = ({ coin, color, toggleCoinSelection }: Props) => {
    return (
        <div
            key={coin.id}
            className='px-3 py-1 rounded-r-3xl rounded-t-3xl text-white flex gap-x-4'
            style={{ backgroundColor: color }}
        >
            <p>{coin.name}</p>
            <button onClick={() => toggleCoinSelection(coin)} name='unselect'>x</button>
        </div>
    )
}

export default CoinTag