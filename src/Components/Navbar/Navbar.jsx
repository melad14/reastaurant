import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import './Navbar.css'
import logoo from '../../images/logo.png'
export default function NavBar() {
  return <>


    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"
        ><img src={logoo} title='logo' />  
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">about us</Nav.Link>
            <Nav.Link href="#explore">explore</Nav.Link>
            <Nav.Link href="#review">review</Nav.Link>
            <Nav.Link href="#faq">faq</Nav.Link>
     
          </Nav>

          <Nav>
          <Nav.Link id='last' >57467466</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ``  </>
}
