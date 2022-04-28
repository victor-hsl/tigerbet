import * as C from './styles'
type Props = {
    content: number;
}

const Card = ({content}: Props) => {
    return(
        <C.Card >
            <C.CardBody>
                {content}
            </C.CardBody>
        </C.Card>
    )
}

export default Card;