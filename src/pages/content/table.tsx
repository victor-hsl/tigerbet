import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Content from '../../template/content'
import Tabs from '../../components/tabs'
import Table from '../../components/table'
const Tabela = () => {
    const {id, name, rodada} = useParams();
    const [linkInfo, setLinkInfo] = useState('');
    const [linkTabela, setLinkTabela] = useState('');
    const [linkRodada, setLinkRodada] = useState('');
    useEffect(() => {
        setLinkInfo('/league/'+id+'/'+name+'/'+rodada)
        setLinkTabela('/table/'+id+'/'+name+'/'+rodada)
        setLinkRodada('/rodada/'+id+'/'+name+'/'+rodada)
    }, []);    
    return(
        <Content>
            <div className="pt-lg-3 pt-sm-1">
                <div className="d-flex justify-content-center mt-sm-1 mt-lg-0">
                    <h2 className="display-5">{name}</h2>
                </div>
                <Tabs title1='Informações' link1={linkInfo} title2='Tabela' link2={linkTabela} title3='Rodada' link3={linkRodada} active={1}/>
                <Table id={id}></Table>
            </div>
        </Content>
    )
}

export default Tabela;