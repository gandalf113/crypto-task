import React from 'react'

type Props = {
    children: React.ReactNode,
    onClick: () => void
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
    return (
        <div
            onClick={onClick}
            className='fixed top-0 left-0 z-40 w-full h-screen overflow-y-hidden bg-black bg-opacity-60 flex items-center justify-center'>
            {children}
        </div>
    )
}

export default Backdrop