import './ActionButtons.css';

const ActionButtons = ({onIncrease, onDecrease}) => {

    // make active button visually distinct

    return(
        <div className="action-buttons__container flex fl-jc-cent">
            <div className="action-buttons__btn flex fl-jc-cent" onClick={onIncrease}>+</div>
            <div className="action-buttons__btn flex fl-jc-cent" onClick={onDecrease}>-</div>
        </div>
    )
}

export default ActionButtons
