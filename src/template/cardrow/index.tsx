import { useState } from 'react'
import Card from '../../components/card'
import * as C from './styles'
import {Match} from '../../types/Match'
type Props = {
    listOfCards: Match[];
}
const CardRow = ({listOfCards}: Props) => {
    const [scrollx, setScrollx] = useState(0);
    const handleLeft = () =>{
        let x = scrollx + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollx(x);
    }
    const handleRight = () =>{
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = listOfCards.length * 350;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollx(x);
    }

    return(
        <C.CardRow>
            <C.Left onClick={handleLeft}>
                <i className="bi bi-chevron-left"></i>
            </C.Left>
            <C.Right onClick={handleRight}>
                <i className="bi bi-chevron-right"></i>
            </C.Right>
            <C.CardArea>
                <C.CardList margemEsq={scrollx} largura={4000} >
                    {listOfCards.length > 0 && listOfCards.map((item, key)=>(
                        <Card 
                            teamA={item.teamA} 
                            teamALogo={item.teamALogo}
                            teamB={item.teamB}
                            teamBLogo={item.teamBLogo}
                            league={item.league}
                            diaSemana={item.diaSemana}
                            hora={item.hora}
                            data={item.data}
                        />
                    ))}
                </C.CardList>
            </C.CardArea>
        </C.CardRow>
    )
}

export default CardRow;