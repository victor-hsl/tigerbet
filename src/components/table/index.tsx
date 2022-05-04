import TableItem from '../tableitem'
import {Posicao} from '../../types/Posicao'
import { useEffect, useState } from "react"
import api from '../../connections/api'
import './styles.css'
type Props = {
    id: string | undefined;
}
const Table = ({id}: Props) => {
    const [tabela, setTabela] = useState<Posicao[]>();
    const getTabela = async () => {
        const {data} = await api.get<Posicao[]>('campeonatos/'+id+'/tabela')
        setTabela(data)
    }
    useEffect(() => {
        getTabela();
    }, []);
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
                    <th scope="col">%</th>
                    <th scope="col">Jogos</th>
                </tr>
            </thead>
            <tbody>
                {tabela?.map((item, chave)=>(
                    <TableItem data={item}/>
                ))}
            </tbody>
        </table>
    )
}

export default Table;