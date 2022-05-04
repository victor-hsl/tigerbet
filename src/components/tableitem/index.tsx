import {Posicao} from '../../types/Posicao'
import './styles.css'
type Props = {
    data: Posicao;
}
const TableItem = ({data}: Props) => {
    return(
        <tr className="item">
            <th scope="row" className="td">{data.posicao}</th>
            <td><img src={data.time.escudo} width="25px" height="25px"/> {data.time.nome_popular}</td>
            <td>{data.pontos}</td>
            <td>{data.vitorias}</td>
            <td>{data.empates}</td>
            <td>{data.derrotas}</td>
            <td>{data.aproveitamento}</td>
            <td>
                <div className="align-items-center">
                    <div className="">
                    <div className={`result btn btn-${data.ultimos_jogos[0] === 'v' ? 'success' : data.ultimos_jogos[0] === 'd' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.ultimos_jogos[0] === 'v' ? 'check' : data.ultimos_jogos[0] === 'd' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.ultimos_jogos[1] === 'v' ? 'success' : data.ultimos_jogos[1] === 'd' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.ultimos_jogos[1] === 'v' ? 'check-lg' : data.ultimos_jogos[1] === 'd' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.ultimos_jogos[2] === 'v' ? 'success' : data.ultimos_jogos[2] === 'd' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.ultimos_jogos[2] === 'v' ? 'check-lg' : data.ultimos_jogos[2] === 'd' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.ultimos_jogos[3] === 'v' ? 'success' : data.ultimos_jogos[3] === 'd' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.ultimos_jogos[3] === 'v' ? 'check-lg' : data.ultimos_jogos[3] === 'd' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    <div className={`btn btn-${data.ultimos_jogos[4] === 'v' ? 'success' : data.ultimos_jogos[4] === 'd' ? 'danger' : 'secondary' } rounded-circle`}>
                        <i className={`bi bi-${data.ultimos_jogos[4] === 'v' ? 'check-lg' : data.ultimos_jogos[4] === 'd' ? 'x-lg' : 'dash-lg'}`}></i>
                    </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableItem;