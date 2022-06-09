import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <>
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                <img className="caps" src="./img/caps.png" alt="caps" />
                <strong> hAtch CaPs</strong>
                </Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#home">Products </Nav.Link>
                <Nav.Link href="#features">Category </Nav.Link>
                <CartWidget />
                </Nav>
            </Container>
            </Navbar>
        </div>
        </>
    );
};

export default NavBar;
