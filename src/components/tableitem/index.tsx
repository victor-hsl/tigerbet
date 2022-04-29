import {TableRow} from '../../types/TableRow'
import './styles.css'
type Props = {
    data: TableRow;
}
const TableItem = ({data}: Props) => {
    return(
        <tr className="item">
            <th scope="row">{data.position}</th>
            <td><img src={data.icon} width="25px" height="25px"/> {data.team}</td>
            <td>{data.points}</td>
            <td>{data.wins}</td>
            <td>{data.draws}</td>
            <td>{data.loses}</td>
            <td>{data.matchs}</td>
            <td>
                <div className="align-items-center">
                    <div className="">
                    <div className={`result btn btn-${data.last5.m1 === 'w' ? 'success' : data.last5.m1 === 'l' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.last5.m1 === 'w' ? 'check' : data.last5.m1 === 'l' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.last5.m2 === 'w' ? 'success' : data.last5.m2 === 'l' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.last5.m2 === 'w' ? 'check-lg' : data.last5.m2 === 'l' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.last5.m3 === 'w' ? 'success' : data.last5.m3 === 'l' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.last5.m3 === 'w' ? 'check-lg' : data.last5.m3 === 'l' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.last5.m4 === 'w' ? 'success' : data.last5.m4 === 'l' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.last5.m4 === 'w' ? 'check-lg' : data.last5.m4 === 'l' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.last5.m5 === 'w' ? 'success' : data.last5.m5 === 'l' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.last5.m5 === 'w' ? 'check-lg' : data.last5.m5 === 'l' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableItem;