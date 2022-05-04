import Accordion from 'react-bootstrap/Accordion'
import {useEffect, useState} from 'react'
import api from '../../connections/api'
import {Rodada} from '../../types/Rodada'
import styled from 'styled-components'
type Props = {
    id: string | undefined;
    rodada: string | undefined;
}

const Th = styled.th`
    text-align: right;
    font-size: 18px;
`
const Td = styled.td`
    text-align: left;
    padding-left: 5px;
    font-size: 18px;
`

const Fixtures = ({id, rodada}: Props) => {
    const [rodadaData, setRodadaData] = useState<Rodada>();
    const getRodada = async () => {
        const {data} = await api.get<Rodada>('campeonatos/'+id+'/rodadas/'+rodada)
        setRodadaData(data)
    }
    useEffect(() => {
        getRodada();
    }, []);
    return(
        <div>
            <div className="d-flex justify-content-center mb-md-4 mb-sm-2">
                <h5>{rodadaData?.nome} - {rodadaData?.status}</h5>
            </div>
            <Accordion defaultActiveKey="0">
                {rodadaData?.partidas.map((item, key) => (
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="ms-auto">
                                <div className="d-flex align-items-center">
                                    <img src={item.time_mandante.escudo} width="25px" height="25px"/>
                                    <div className="mx-1">{item.time_mandante.sigla}</div>
                                    <div>{item.placar_mandante}</div>
                                    <div className="mx-1">x</div>
                                    <div>{item.placar_visitante}</div>
                                    <div className="mx-1">{item.time_visitante.sigla}</div>
                                    <img src={item.time_visitante.escudo} width="25px" height="25px"/>
                                    <div className="mx-1">-</div>
                                    <div>{item.data_realizacao}</div>
                                    <div className="mx-1">-</div>
                                    <div>{item.status}</div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex justify-content-center">
                                <table>
                                    <tr>
                                        <Th>
                                            Mandante:
                                        </Th>
                                        <Td>
                                            {item.time_mandante.nome_popular}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Visitante:
                                        </Th>
                                        <Td>
                                            {item.time_visitante.nome_popular}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Status:
                                        </Th>
                                        <Td>
                                            {item.status}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Data:
                                        </Th>
                                        <Td>
                                            {item.data_realizacao}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Inicio:
                                        </Th>
                                        <Td>
                                            {item.hora_realizacao}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Campeonato:
                                        </Th>
                                        <Td>
                                            {item.campeonato.nome}
                                        </Td>
                                    </tr>
                                    <tr>
                                        <Th>
                                            Estádio:
                                        </Th>
                                        <Td>
                                            {item.estadio.nome_popular}
                                        </Td>
                                    </tr>
                                </table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

export default Fixtures;