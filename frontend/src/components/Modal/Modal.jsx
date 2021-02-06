import './Modal.css';

const Modal = ({ handleClose, show, children }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className="modal-main">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
