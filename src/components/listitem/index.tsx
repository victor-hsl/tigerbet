import {Link} from 'react-router-dom'
type Props = {
    name: string;
    id: number;
    urlLogo: string;
    sizeLogo: string;
    disabled: boolean;
}
const ListItem = ({name, id, urlLogo, sizeLogo, disabled} : Props) => {
    return(
        <Link to={{pathname:`/league/${id}`}} className={`list-group-item list-group-item-action ${disabled ? 'disabled' : ''}`} >
            <img src={urlLogo} width={sizeLogo} /> {name}
        </Link>
    )
}

export default ListItem;