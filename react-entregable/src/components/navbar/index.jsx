import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto flex-nav">
                        {/* no entiendo porque no me deja usar el nav para hacer el link  */}
                        {/* <Link to={"/"}>
                        <button >Home</button>
                        </Link>     */}
                        <Nav className="nav-text">Features</Nav>
                        <Nav className="nav-text">Pricing</Nav>
                    </Nav>
                    <div className="nav-cart">
                        <a href=""><CartWidget className="cart" /></a>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;