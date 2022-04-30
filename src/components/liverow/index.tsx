import * as C from './styles'
import { Live } from '../../types/Live'
type Props = {
    content: Live;
}
const LiveRow = ({content}: Props) =>{
    return(
        <div>
            <hr/>
            <C.Live className="mx-1 d-flex justify-content-around align-items-center display-6">
                <div>
                    <img src={content.matchInfo.teamALogo} width="60px" height="60px"/>
                </div>
                <div>
                    {content.matchInfo.teamA}
                </div>
                <div>
                    {content.teamAScore}
                </div>
                <div>
                    <i className="bi bi-x-lg"></i>
                </div>
                <div>
                    {content.teamBscore}
                </div>
                <div>
                    {content.matchInfo.teamB}
                </div>
                <div>
                    <img src={content.matchInfo.teamBLogo} width="60px" height="60px"/>
                </div>
            </C.Live> 
            <hr/> 
            <div className="d-flex justify-content-center align-items-center">
                <div className="display-5">
                    {content.time}
                </div>
                <div className="ms-2 btn btn-outline-danger rounded-circle align-items-center justify-content-center">
                    <i className="bi bi-record-circle"></i>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default LiveRow;