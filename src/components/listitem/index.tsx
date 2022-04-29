import {Link} from 'react-router-dom'
type Props = {
    name: string;
    url: string;
    urlLogo: string;
    sizeLogo: string;
    active: boolean;
}
const ListItem = ({name, url, urlLogo, sizeLogo, active} : Props) => {
    return(
        <Link to={url} className={`list-group-item list-group-item-action ${active ? 'active' : ''}`} >
            <img src={urlLogo} width={sizeLogo} /> {name}
        </Link>
    )
}

export default ListItem;