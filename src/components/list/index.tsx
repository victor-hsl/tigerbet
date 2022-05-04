import ListItem from '../listitem'
import {Campeonato} from '../../types/Campeonato'
import './styles.css'
type Props = {
    content: Campeonato[] | undefined;
}
const List = ({content} : Props) => {
    return(
        <div className="list-group shadow" id="list-tab" role="tablist">
            <div className="list-group-item bg-warning"><i className="bi bi-list-ul"></i> <b>Campeonatos</b></div>
            {content?.map((item, key)=>(
                <ListItem 
                    popular_name={item.nome_popular}
                    name={item.nome} 
                    id={item.campeonato_id} 
                    urlLogo={item.logo} 
                    sizeLogo={'30px'} 
                    rodada={item.rodada_atual.rodada}
                    disabled={
                        item.campeonato_id === 10 || item.campeonato_id === 2 ? false : true
                    }/>
            ))}
        </div>
    )
}

export default List;