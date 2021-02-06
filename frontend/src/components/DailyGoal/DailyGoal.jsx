import { useState } from 'react';
import './DailyGoal.css';
import Modal from "../Modal/Modal";

const DailyGoal = ({inputChange, submit}) => {

    const [popup, setPopup] = useState(false)

    const showModal = () => {
        setPopup(true)
    }

    const hideModal = (e) => {
        setPopup(false)
    }

    return(
        <div className="daily-goal__container">
            <button onClick={showModal}>Edit</button>
            <Modal show={popup}>
                <h3>Set your Daily goal</h3>
                <input onChange={inputChange} defaultValue="1000" type="number"/>
                <div className="daily-goal__cta-btn" onClick={() => { submit(); hideModal();}}>Submit</div>
            </Modal>
        </div>
    )
}

export default DailyGoal
