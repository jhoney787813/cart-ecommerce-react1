import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import './TopMenu.scss';

export default function TopMenu()
{
    return (
        <Navbar bg="dark" variant="dark" className="top-menu">
            <Container className="">         
            <BrandNav></BrandNav>
            {/*  MENU */}
            {/* <MenuNav></MenuNav> */}
            {/* CARRITO */}
            </Container>
        </Navbar>

        //<div> TOP MENU!... </div>

    );

}

function BrandNav(){

    return(
        <Navbar.Brand className="navbar-brand"> 
                    <Logo/>
                    <h2>Casa de los helados</h2>
        </Navbar.Brand>
    );
}

function MenuNav(){

    return(
        <Nav className="mr-auto">
            <Nav.Link href="#">Aperitivos</Nav.Link>
            <Nav.Link href="#">Helados</Nav.Link>
            <Nav.Link href="#">Helados Mascotas!</Nav.Link>
        </Nav>

    );
}