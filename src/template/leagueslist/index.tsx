import List from '../../components/list'
import {leagues} from '../../data/leagues'
const LeaguesList = () => {
    return(
        <div className="ms-1 me-1 col-md-3 col-11 mx-auto">
            <List content={leagues}/>
        </div>
    )
}

export default LeaguesList;