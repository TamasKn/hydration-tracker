import './App.css';
import InfoDisplay from "./components/InfoDisplay";

function App() {
    return (
        <div className="app__container">
            <div className="app__title">
                <h1>Hydration Tracker</h1>
            </div>

            <InfoDisplay>
                <h3>0.75L</h3>
                <p>Total water drunk</p>
            </InfoDisplay>

            <InfoDisplay>
                <h3>3</h3>
                <p>Day streak</p>
            </InfoDisplay>
            

            <div className="user">

            </div>

            <div className="message">
                <h4>Some message</h4>
            </div>

            <div className="volumes">
                <div>100ml</div>
                <div>250ml</div>
                <div>350ml</div>
            </div>

            <div className="cta-buttons">
                <div>PLUS</div>
                <div>MINUS</div>
            </div>


        </div>
    );
}

export default App;
