import List from '../../components/list'
import {leagues} from '../../data/leagues'
const LeaguesList = () => {
    return(
        <div className="col-md-12 col-12">
            <List content={leagues}/>
        </div>
    )
}

export default LeaguesList;