import LeaguesList from '../leagueslist'
import holder from '../../assets/adholder.png'
import * as C from './styles'
const aside = () => {
    return(
        <div className="col-12 col-md-3">
            <LeaguesList/>
            <C.adDiv className="col-md-12 mt-md-5 d-flex align-items-center justify-content-center">
                <C.adImg src={holder} className=""/>
            </C.adDiv>
        </div>
    )
}

export default aside;