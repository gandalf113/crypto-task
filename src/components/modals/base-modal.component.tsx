import Backdrop from './backdrop.component'

type Props = {
    handleClose: () => void
    children: React.ReactNode,
}

const Modal: React.FC<Props> = ({ handleClose, children }) => {
    return (
        <Backdrop onClick={(handleClose)}>
            <div
                onClick={(e) => e.stopPropagation()}
                className='z-10 lg:w-1/4 md:w-2/3 w-4/5 h-fit m-auto border-2 border-zinc-700 rounded-xl flex flex-col bg-zinc-900 text-zinc-50'>
                {children}
            </div>
        </Backdrop>
    )
}

export default Modal