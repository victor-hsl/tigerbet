import {useParams} from 'react-router-dom'
import Content from '../../template/content'
import {Campeonato} from '../../types/Campeonato'
import api from '../../connections/api'
import { useEffect, useState } from 'react'
import Tabs from '../../components/tabs'
import styled from 'styled-components'

const Th = styled.th`
    text-align: right;
`
const Td = styled.td`
    text-align: left;
    padding-left: 5px;
`


const League = () => {
    const {id} = useParams();
    const [campeonato, setCampeonato] = useState<Campeonato>();
    const getCampeonato = async () => {
        const {data} = await api.get<Campeonato>('campeonatos/'+ id)
        setCampeonato(data)
    }

    useEffect(() => {
        getCampeonato();
    }, []);

    return(
        <Content>
            <div className="p-lg-3 p-sm-1">
                <div className="d-flex justify-content-center mt-sm-1 mt-lg-0">
                    <h2 className="display-5">{campeonato?.nome_popular}</h2>
                </div>
                <Tabs title1='Informações' link1='' title2='Tabela' link2='' title3='Rodada' link3='Rodada' active={0}/>
                <div className="pt-2">
                    <div className="d-flex justify-content-center align-items-start">
                        <table className=''>
                            <tr>
                                <Th>Nome:</Th>
                                <Td>{campeonato?.nome}</Td>
                            </tr>
                            <tr>
                                <Th>Edição:</Th>
                                <Td>{campeonato?.edicao_atual.edicao_id}ª</Td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default League;