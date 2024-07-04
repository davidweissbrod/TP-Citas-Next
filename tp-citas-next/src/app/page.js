import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Home() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Guardia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pages/reservas">Reservas</Nav.Link>
            <Nav.Link href="/pages/contacto">Contacto</Nav.Link>
            <Nav.Link href="/pages/quienes-somos">Quienes somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
      <div class = "container">
        <h1>Guardia de Mascotas</h1>
        <p>Aca tenes un espacio para poder sacar turnos para tener citas en la guardia</p>
      </div>
    </>
  );
}