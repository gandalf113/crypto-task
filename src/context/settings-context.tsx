import React, { createContext, useState } from "react";


export type SettingsContextType = {
    vsCurrency: string,
    setVsCurrency: React.Dispatch<React.SetStateAction<string>>
    decimation: number,
    setDecimation: React.Dispatch<React.SetStateAction<number>>
}

const initialState = {
    vs_currency: "pln",
    decimation: 2,
}

export const SettingsContext = createContext<SettingsContextType>({
    vsCurrency: initialState.vs_currency,
    setDecimation: () => { },
    decimation: initialState.decimation,
    setVsCurrency: () => { alert('sos') }
});

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [vsCurrency, setVsCurrency] = useState(initialState.vs_currency);
    const [decimation, setDecimation] = useState(initialState.decimation);

    return (
        <SettingsContext.Provider value={{ vsCurrency, setVsCurrency, decimation, setDecimation }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider