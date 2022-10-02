import React, { createContext, useContext, useEffect, useState } from "react";
import { Coin } from "../utils/types";

export type CoinSelectorContextType = {
    selectedCoins: Coin[];
    toggleCoinSelection: (coin: Coin) => void;
    isCoinSelected: (coin: Coin) => boolean;
}

export const CoinSelectorContext = createContext<CoinSelectorContextType>({
    selectedCoins: [],
    toggleCoinSelection: () => {},
    isCoinSelected: () => false
});

const STORAGE_KEY = "selectedCoins";

const CoinSelectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedCoins, setSelectedCoins] = useState<Coin[]>([]);

    /**
     * Save selectedCoins to localStorage
     */
    const setSelectedCoinsPersistently = (newSelectedCoins: Array<Coin>) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSelectedCoins));
        setSelectedCoins(newSelectedCoins);
    }

    /**
     * Try to get selectedCoins from localStorage
     */
    useEffect(() => {
        const storageInBrowser = localStorage.getItem(STORAGE_KEY);

        if (storageInBrowser) {
            setSelectedCoins(JSON.parse(storageInBrowser));
        }
    }, []);

    /**
     * Selects coin if it was unselected,
     * unselects coin if it was selected
     * @param {Object} coin
     */
    const toggleCoinSelection = (coin: Coin) => {
        const isCoinAlreadySelected = isCoinSelected(coin);
        if (isCoinAlreadySelected) {
            // Remove coin from selected
            const newSelectedCoins = selectedCoins.filter(_coin => _coin.id !== coin.id);
            setSelectedCoinsPersistently(newSelectedCoins);
        } else {
            if (selectedCoins.length >= 5) {
                // TODO: Implement toggle modal here somehow
                return;
            }

            // Add coin to selected
            const newSelectedCoins = selectedCoins.concat(coin);
            setSelectedCoinsPersistently(newSelectedCoins);
        }
    }

    const isCoinSelected = (coin: Coin) => !!selectedCoins.find(_coin => _coin.id === coin.id);

    return <CoinSelectorContext.Provider value={{ selectedCoins, toggleCoinSelection, isCoinSelected }}>
        {children}
    </CoinSelectorContext.Provider>
}

export default CoinSelectionProvider