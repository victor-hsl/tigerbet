import * as C from './styles'
import {Match} from '../../types/Match'
import fundo from '../../assets/fundocard.png'
const Card = (match: Match) => {
    return(
        <C.Card >
            <C.CardBody>
                <C.CardContent className="d-flex flex-wrap align-items-center justify-content-around">
                    <div className="d-flex justify-content-around align-items-center">
                        <div>{match.teamA}</div>
                        <img className="mx-1" src={match.teamALogo} width='35px' height='35px'/>
                        <i className="bi bi-x-lg"></i>
                        <img className="mx-1" src={match.teamBLogo} width='35px' height='35px'/>
                        {match.teamB}
                    </div>
                    <div className="d-flex justify-content-center">
                        {match.league}
                    </div>
                    
                <img src={fundo} className="background"/>
                </C.CardContent>
                <C.Hr/>
                <C.CardFooter>
                    {match.diaSemana} - {match.data} - {match.hora}
                </C.CardFooter>
            </C.CardBody>
        </C.Card>
    )
}

export default Card;