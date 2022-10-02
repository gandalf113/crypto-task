import React, { useState } from 'react'

const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return [modalOpen, setModalOpen] as const;
}

export default useModal