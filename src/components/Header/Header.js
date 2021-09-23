import React from "react";
import "./Header.css";
import img from './images/burger.jpg';

import { Container, Navbar, Nav,Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <>
    
    <Navbar bg="#000" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
            <Nav >
              <Nav.Link className="text-white" href="">Home</Nav.Link>
              <Nav.Link className="text-white" href="">About</Nav.Link>
              <Nav.Link className="text-white" href="">Service & package</Nav.Link>
              <Nav.Link className="text-white" href="">Gallery</Nav.Link>
              <Nav.Link className="text-white" href="">FAQ</Nav.Link>
              <Nav.Link className="text-white" href="">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
          
  <Carousel.Item>
      
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
};

export default Header;
