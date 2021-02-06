import { useState, useEffect } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay/InfoDisplay';
import Volumes from './components/Volumes/Volumes';

function App() {

    const [volume, setVolume] = useState(100)

    useEffect(() => {
        console.log({volume})
    }, [volume])

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

            <div className="user">

            </div>

            <div className="message">
                <h4>Some message</h4>
            </div>

            <Volumes onVolumeInput={onVolumeInput} />

            <div className="cta-buttons">
                <div>PLUS</div>
                <div>MINUS</div>
            </div>


        </div>
    );
}

export default App;
