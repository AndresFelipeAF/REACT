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

                    <Navbar.Brand href="/">SHOPIE</Navbar.Brand>
                    <Nav className="me-auto flex-nav">
                        <Link style={{textDecoration: "none"}} to={"/"}>
                            <Nav className="nav-text">Todos los productos</Nav>
                        </Link>
                        <Link style={{textDecoration: "none"}} to={"/categoria/relojes"}>
                            <Nav className="nav-text">Relojes</Nav>
                        </Link>
                        <Link style={{textDecoration: "none"}} to={"/categoria/tabletas"}>
                            <Nav className="nav-text">Tabletas</Nav>
                        </Link>
                        <Link style={{textDecoration: "none"}}  to={"/categoria/celulares"}>
                            <Nav className="nav-text">Celulares</Nav>
                        </Link>
                    </Nav>
                    <div className="nav-cart">
                        <Link  style={{textDecoration: "none", color: "white"}} to={"/Cart"}>
                            <CartWidget className="cart" />
                        </Link >
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;