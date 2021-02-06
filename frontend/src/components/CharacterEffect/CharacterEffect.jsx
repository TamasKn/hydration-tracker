import './CharacterEffect.css'
import body from '../../assets/human.png'
import CharacterPath from './CharacterPath';

const CharacterEffect = () => {
    return(
        <div className="character-effect__container flex fl-jc-cent">
            <div className="meter">
                <CharacterPath />
                <div id="filling" style={{'height': 55 + '%'}}></div>
                <img id="silhouette" src={body} alt=""/>
            </div>
        </div>
    )
}

export default CharacterEffect