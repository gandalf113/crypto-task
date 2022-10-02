import React, { ChangeEvent, useContext } from 'react';
import { SettingsContext } from '../../context/settings-context';
import Modal from './base-modal.component';

type Props = {
    handleClose: () => void
}

const SettingsModal: React.FC<Props> = ({ handleClose }) => {
    const { decimation, setDecimation, vsCurrency, setVsCurrency } = useContext(SettingsContext);

    const handleSetDecimation = (event: ChangeEvent<HTMLInputElement>) => {
        const decimation = Number.parseInt(event.target.value);
        setDecimation(decimation);
    }

    return (
        <Modal handleClose={handleClose}>
            <div className='p-4'>

                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-2xl'>Settings</h1>
                    <button onClick={handleClose} className='text-xl'>x</button>
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor='decimation'>Chart Data Decimation [{decimation}]</label>
                    <input id='decimation' type='range' min={1} max={6} value={decimation} onChange={handleSetDecimation} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='decimation'>Exchange Currency</label>
                    <select className='bg-zinc-800 text-zinc-50' onChange={(e) => setVsCurrency(e.target.value)} value={vsCurrency}>
                        <option value='pln'>PLN</option>
                        <option value='usd'>USD</option>
                    </select>
                </div>
            </div>
        </Modal>
    )
}

export default SettingsModal