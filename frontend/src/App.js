import { useState, useEffect } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay/InfoDisplay';
import Volumes from './components/Volumes/Volumes';
import ActionButtons from './components/ActionButtons/ActionButtons';
import CharacterEffect from './components/CharacterEffect/CharacterEffect';

function App() {

    const [volume, setVolume] = useState(100)
    const [consumption, setConsumption] = useState({
        ml: 0,
        percentage: 0.1
    })

    useEffect(() => {

    }, [])

    const onVolumeInput = (e) => {
        const { id } = e.target

        switch(id) {
            case 'v100':
                setVolume(100)
                break;
            case 'v250':
                setVolume(250)
                break;
            case 'v350':
                setVolume(350)
                break;
            default:
                break;
        }
    }

    const onIncrease = (e) => {

    }

    const onDecrease = (e) => {

    }

    return (
        <div className="app__container">
            <div className="app__title">
                <h1>Hydration Tracker</h1>
            </div>

            <div className="app__tracker-wrapper flex fl-jc-se">
                <InfoDisplay>
                    <h3>0.75L</h3>
                    <p>Total water drunk</p>
                </InfoDisplay>

                <InfoDisplay>
                    <h3>3</h3>
                    <p>Day streak</p>
                </InfoDisplay>
            </div>

            <div className="modal">

            </div>

            <CharacterEffect />

            <div className="message">
                <h4>Some message</h4>
            </div>

            <Volumes onVolumeInput={onVolumeInput} />

            <ActionButtons
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />


        </div>
    );
}

export default App;
