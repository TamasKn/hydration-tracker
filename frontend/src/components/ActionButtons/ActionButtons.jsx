import './ActionButtons.css'

const ActionButtons = ({onIncrease, onDecrease}) => {

    return(
        <div className="action-buttons__container flex fl-jc-cent">
            <div className="cta-btn-rounded flex fl-jc-cent" onClick={onIncrease}>+</div>
            <div className="cta-btn-rounded flex fl-jc-cent" onClick={onDecrease}>-</div>
        </div>
    )
}

export default ActionButtons
