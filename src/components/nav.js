import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../assets/icon.png'
import Container from 'react-bootstrap/Container'

const Styles = styled.div`
  .navbar {
    background-color: rgba(0,0,0,0);
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    font-size: 1.8rem;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 572px){
    a{
      font-size: 0.8em;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href=""><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/projects">Projects</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles >
)
