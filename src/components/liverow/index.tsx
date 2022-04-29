import * as C from './styles'
import { Live } from '../../types/Live'
type Props = {
    content: Live;
}
const LiveRow = ({content}: Props) =>{
    return(
        <div>
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
            <div></div>
        </div>
    )
}

export default LiveRow;