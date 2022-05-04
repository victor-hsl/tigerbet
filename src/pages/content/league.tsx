import {useParams} from 'react-router-dom'
import Content from '../../template/content'
import {Campeonato} from '../../types/Campeonato'
import api from '../../connections/api'
import { useEffect, useState } from 'react'
import Tabs from '../../components/tabs'
import styled from 'styled-components'

const Th = styled.th`
    text-align: right;
    font-size: 20px;
`
const Td = styled.td`
    text-align: left;
    padding-left: 5px;
    font-size: 20px;
`


const League = () => {
    const {id, name, rodada} = useParams();
    const [campeonato, setCampeonato] = useState<Campeonato>();
    const [linkTabela, setLinkTabela] = useState('');
    const [linkInfo, setLinkInfo] = useState('');
    const [linkRodada, setLinkRodada] = useState('');
    const getCampeonato = async () => {
        const {data} = await api.get<Campeonato>('campeonatos/'+ id)
        setCampeonato(data)
    }

    useEffect(() => {
        getCampeonato();
        setLinkTabela('/table/'+id+'/'+name+'/'+rodada)
        setLinkRodada('/rodada/'+id+'/'+name+'/'+rodada)
        setLinkInfo('/league/'+id+'/'+name+'/'+rodada)
    }, []);

    return(
        <Content>
            <div className="pt-lg-3 pt-sm-1">
                <div className="d-flex justify-content-center mt-sm-1 mt-lg-0">
                    <h2 className="display-5">{campeonato?.nome_popular}</h2>
                </div>
                <Tabs title1='Informações' link1={linkInfo} title2='Tabela' link2={linkTabela} title3='Rodada' link3={linkRodada} active={0}/>
                <div className="pt-sm-2 pt-md-4">
                    <div className="d-flex justify-content-center align-items-start">
                        <table>
                            <tr>
                                <Th>Nome:</Th>
                                <Td>{campeonato?.nome}</Td>
                            </tr>
                            <tr>
                                <Th>Edição:</Th>
                                <Td>{campeonato?.edicao_atual.edicao_id}ª</Td>
                            </tr>
                            <tr>
                                <Th>Temporada:</Th>
                                <Td>{campeonato?.edicao_atual.temporada}</Td>
                            </tr>
                            <tr>
                                <Th>Fase atual:</Th>
                                <Td>{campeonato?.fase_atual.nome}</Td>
                            </tr>
                            <tr>
                                <Th>Tipo:</Th>
                                <Td>{campeonato?.tipo}</Td>
                            </tr>
                            <tr>
                                <Th>Rodada Atual:</Th>
                                <Td>{campeonato?.rodada_atual.nome}</Td>
                            </tr>
                            <tr>
                                <Th>Status:</Th>
                                <Td>Em {campeonato?.status}</Td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default League;