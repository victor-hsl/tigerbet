import {Link} from 'react-router-dom'
type Props = {
    popular_name: string;
    name: string;
    id: number;
    urlLogo: string;
    sizeLogo: string;
    rodada: number;
    disabled: boolean;
}
const ListItem = ({popular_name, name, id, urlLogo, sizeLogo, rodada, disabled} : Props) => {
    return(
        <Link to={{pathname:`/league/${id}/${popular_name}/${rodada}`}} className={`list-group-item list-group-item-action ${disabled ? 'disabled' : ''}`} >
            <img src={urlLogo} width={sizeLogo} /> {name}
        </Link>
    )
}

export default ListItem;