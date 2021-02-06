import { useState } from 'react'
import './DailyGoal.css'
import Modal from '../Modal/Modal'
import pencil from '../../assets/edit.svg'

const DailyGoal = ({inputChange, submit, goal}) => {

    const [popup, setPopup] = useState(false)

    const showModal = () => {
        setPopup(true)
    }

    const hideModal = () => {
        setPopup(false)
    }

    return(
        <div className="daily-goal__container flex fl-jc-cent">
            <div className="daily-goal__edit">
                <p>{goal/1000}L</p>
                <img
                    onClick={showModal}
                    src={pencil}
                    alt="Pencil Edit"
                    title="Change daily goal"
                />
            </div>
            <Modal show={popup}>
                <h3>Set your Daily goal</h3>
                <input onChange={inputChange} defaultValue="0" type="number"/>
                <div className="cta-btn-rectangle" onClick={() => { submit(); hideModal();}}>Submit</div>
            </Modal>
        </div>
    )
}

export default DailyGoal
