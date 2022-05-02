import List from '../../components/list'
import {leagues} from '../../data/leagues'
import {Campeonato} from '../../types/Campeonato'
import api from '../../connections/api'
import './styles.css'
import {useEffect, useState} from 'react'
const LeaguesList = () => {
    const [campeonatos, setCampeonatos] = useState<Campeonato[]>();
    const getCampeonatos = async () => {
        const {data} = await api.get<Campeonato[]>('campeonatos')
        setCampeonatos(data)
    }
    useEffect(()=>{
        getCampeonatos();    
    }, []);

    return(
        <div className="col-md-12 col-12 font">
            <List content={campeonatos}/>
        </div>
    )
}

export default LeaguesList;