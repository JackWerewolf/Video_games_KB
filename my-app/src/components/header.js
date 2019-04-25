import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../img/LogoWeb.png';
import '../App.css';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';




class Header extends Component{
    render(){
        return(

          <div  className="sticky">
          <Navbar variant="dark" bg="dark" expand="lg">
          <Navbar.Brand ><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link> <Link to="/#home">Home</Link></Nav.Link>
              <Nav.Link><Link to="/Add">Register new game</Link></Nav.Link>
              <Nav.Link><Link to="List">List</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>

        )
    }
}

export default Header;