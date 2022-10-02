import React, { useEffect } from 'react'

/**
 * Closes the modal when scren size is big enough
 */
const useAutoClose = (handleClose: () => void, screenWidth: number) => {
    const autoClose = useEffect(() => {
        const closeModal = () => {
            // Close the modal if screen width exceeds 768 pixels
            if (window.innerWidth > screenWidth) {
                handleClose();
            }
        }
        window.addEventListener('resize', closeModal);

        return () => {
            window.removeEventListener('resize', closeModal);
        }
    })

    return autoClose
}

export default useAutoClose