
import Modal from './base-modal.component'

type Props = {
    handleClose: () => void;
}

const CoinLimitModal: React.FC<Props> = ({ handleClose }) => {
    return (
        <Modal handleClose={handleClose}>
            <p className='text-center w-full'>You can select up to five currencies</p>
        </Modal>
    )
}

export default CoinLimitModal