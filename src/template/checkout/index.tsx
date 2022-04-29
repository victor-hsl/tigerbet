import * as C from '../aside/styles'
import holder from '../../assets/adholder.png'
import Checkoutcard from '../../components/checkoutcard'
const Checkout = () =>{
    return(
        <div className="col-12 col-md-3 col-lg-2">
            <C.adDiv className="col-md-12 ms-md-1 d-flex align-items-center justify-content-center">
                <C.adImg src={holder} className=""/>
            </C.adDiv>
            <Checkoutcard/>
        </div>
    )
}

export default Checkout;