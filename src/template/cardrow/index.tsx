import { useState } from 'react'
import Card from '../../components/card'
import * as C from './styles'
type Props = {
    list: number[];
}
const CardRow = ({list}: Props) => {
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
        let listW = list.length * 400;
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
                    {list.length > 0 && list.map((item, key)=>(
                        <Card content={item}/>
                    ))}
                </C.CardList>
            </C.CardArea>
        </C.CardRow>
    )
}

export default CardRow;