import './Volumes.css'

const Volumes = ({onVolumeInput}) => {
    return(
        <div className="volumes__container flex fl-jc-cent">
            <div className="volumes__button" id="v100" onClick={onVolumeInput}>100ml</div>
            <div className="volumes__button" id="v250" onClick={onVolumeInput}>250ml</div>
            <div className="volumes__button" id="v350" onClick={onVolumeInput}>350ml</div>
        </div>
    )
}

export default Volumes
