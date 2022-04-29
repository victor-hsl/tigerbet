import TableItem from '../tableitem'
import {TableRow} from '../../types/TableRow'
import './styles.css'
type Props = {
    content: TableRow[];
}
const Table = ({content}: Props) => {
    return(
        <table className="table table-striped table-hover justify-content-center">
            <thead>
                <tr >
                    <th scope="col" className="td">#</th>
                    <th scope="col">Clube</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                    <th scope="col">PJ</th>
                    <th scope="col">Jogos</th>
                </tr>
            </thead>
            <tbody>
                {content.length > 0 && content.map((item, chave)=>(
                    <TableItem data={item}/>
                ))}
            </tbody>
        </table>
    )
}

export default Table;