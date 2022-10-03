import React from 'react'
import { getDistinctColor } from '../utils/general-utils'
import { Coin, CoinPrices } from '../utils/types'

type Props = {
    selectedCoins: Array<Coin>,
    coinPrices: CoinPrices,
    vsCurrency: string
}

const CurrentPriceSection: React.FC<Props> = ({ selectedCoins, coinPrices, vsCurrency }) => {
    return (
        <div className='text-zinc-300 my-3'>
            {selectedCoins.length > 0 && <h1 className='text-zinc-50 text-2xl mb-1'>Current prices</h1>}

            {selectedCoins.map((coin, index) => (
                coinPrices[coin.id] && <div key={coin.id} className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: getDistinctColor(index) }} />

                    <span>1 {coin.name} = {coinPrices[coin.id][vsCurrency]} {vsCurrency.toUpperCase()}</span>
                </div>
            ))}
        </div>
    )
}

export default CurrentPriceSection