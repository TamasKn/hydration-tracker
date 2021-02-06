import { useState, useEffect } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay/InfoDisplay';
import Volumes from './components/Volumes/Volumes';
import ActionButtons from './components/ActionButtons/ActionButtons';
import CharacterEffect from './components/CharacterEffect/CharacterEffect';
import DailyGoal from './components/DailyGoal/DailyGoal';

function App() {

    const [volume, setVolume] = useState(100)
    const [consumption, setConsumption] = useState({
        ml: 0,
        percentage: 0.1
    })
    const [dailyGoal, setDailyGoal] = useState({
        goal: 1000,
        input: null,
        day: 1
    })

    useEffect(() => {

    }, [])

    const onDailyGoalChange = (e) => {
        setDailyGoal({...dailyGoal, input: e.target.value})
    }

    const onDailyGoalSubmit = () => {
        // Calculates and sets the percentage compared to the new daily goal
        const refinedPercentage = (consumption.ml / dailyGoal.input) * 100
        setDailyGoal({...dailyGoal, goal: dailyGoal.input})
        setConsumption({...consumption, percentage: refinedPercentage })
    }

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
        const percentageResult = consumption.percentage + calculatePercentage(volume, dailyGoal.goal)
        setConsumption({...consumption, ml: consumption.ml + volume, percentage: percentageResult})
    }

    const onDecrease = (e) => {
        // Calculates current consumption and avoid to go below zero
        const consumptionResult = consumption.ml - volume >= 0 ? consumption.ml - volume : 0
        const percentageResult = consumption.percentage - calculatePercentage(volume, dailyGoal.goal)

        // Calculating if the water consumption above or equal 0.1, otherwise resets to initial state
        if( percentageResult >= 0.1) {
            setConsumption({...consumption, ml: consumptionResult, percentage: percentageResult})
        } else {
            setConsumption({...consumption, ml: consumptionResult, percentage: 0.1})
        }
    }

    const calculatePercentage = (volume, goal) => {
        return (volume / goal) * 100
    }

    return (
        <div className="app__container">
            <div className="app__title">
                <h1>Hydration Tracker</h1>
            </div>

            <div className="app__tracker-wrapper flex fl-jc-se">
                <InfoDisplay>
                    <h3>{consumption.ml / 1000}L</h3>
                    <p>Total water drunk</p>
                </InfoDisplay>

                <InfoDisplay>
                    <h3>{dailyGoal.day}</h3>
                    <p>Day streak</p>
                </InfoDisplay>
            </div>

            <DailyGoal
                inputChange={onDailyGoalChange}
                submit={onDailyGoalSubmit}
            />

            <CharacterEffect consumption={consumption.percentage} />

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
