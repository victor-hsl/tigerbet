import { ReactNode } from "react";

type Props = {
    name: string;
    url: string;
    urlLogo: string;
    sizeLogo: string;
    active: boolean;
}
const ListItem = ({name, url, urlLogo, sizeLogo, active} : Props) => {
    return(
        <a className={`list-group-item list-group-item-action ${active ? 'active' : ''}`} 
        id="list-home-list" 
        data-toggle="list"
        role="tab" 
        aria-controls="home">
            <img src={urlLogo} width={sizeLogo} /> {name}
        </a>
    )
}

export default ListItem;