import ListItem from '../listitem'
import {League} from '../../types/League'
import './styles.css'
type Props = {
    content: League[];
}
const List = ({content} : Props) => {
    return(
        <div className="list-group shadow" id="list-tab" role="tablist">
            <div className="list-group-item list-group-item-warning"><i className="bi bi-list-ul"></i> <b>Campeonatos</b></div>
            {content.length > 0 && content.map((item, key)=>(
                <ListItem name={item.name} url='' urlLogo={item.urlLogo} sizeLogo={item.sizeLogo} active={false}/>
            ))}
        </div>
    )
}

export default List;