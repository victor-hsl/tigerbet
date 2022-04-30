import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Logo from '../../assets/logofrente.png'
import {Link} from 'react-router-dom'
import './styles.css'
export const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img src={Logo} className="logo"/> tigerbet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link><Link to='/live' className="link">Ao Vivo</Link></Nav.Link>
                        <Nav.Link><Link to='/upnext' className="link">A Seguir</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <form className="form-inline col-lg-4">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Pesquisar" aria-describedby="inputGroupAddOn"/>
                                <button className="btn btn-outline-light" type="button" id="inputGroupAddOn"><i className="bi bi-search"></i></button>
                            </div>
                        </form>
                        <div className="input-group mt-lg-0 mt-1 ms-lg-1">
                            <Link to='/register'><button className="btn btn-warning">Registre-se</button></Link>
                            <button className="btn btn-outline-warning">Login</button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}