import List from '../../components/list'
import {leagues} from '../../data/leagues'
import './styles.css'
const LeaguesList = () => {
    return(
        <div className="col-md-12 col-12 font">
            <List content={leagues}/>
        </div>
    )
}

export default LeaguesList;