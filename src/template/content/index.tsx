import { ReactNode } from 'react'
import * as C from './styles'

type Props = {
    children: ReactNode;
}

const Content = ({children}: Props) => {
    return(
        <C.Content className="col-12 col-md-5 col-lg-6 mt-sm-1 mt-md-0">
            {children}
        </C.Content>
    )
}

export default Content;