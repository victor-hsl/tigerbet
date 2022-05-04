import {Link} from 'react-router-dom'
import './styles.css'
type Props = {
    title1: string;
    title2: string;
    title3: string;
    link1: string;
    link2: string;
    link3: string;
    active: number;
}

const Tabs = ({title1, link1, title2, link2, title3, link3, active} : Props) => {
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link className={`linkcolor nav-link ${active===0 ? 'active' : ''}`} to={link1}>{title1}</Link>
            </li>
            <li className="nav-item">
                <Link className={`linkcolor nav-link ${active===1 ? 'active' : ''}`} to={link2}>{title2}</Link>
            </li>
            <li className="nav-item">
                <Link className={`linkcolor nav-link ${active===2 ? 'active' : ''}`} to={link3}>{title3}</Link>
            </li>
        </ul>
    );
};
export default Tabs;