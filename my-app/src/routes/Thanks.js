import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';

import { ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';


class Thanks extends Component{
    render(){
        return(
            <div>
                <Header />


            <div className="container thanks-text">
            <h1>Thank you  for your support!</h1>
            </div>

            <div className="container x">
                  <ListGroup>
                      <ListGroup.Item><Link to="/Add">Register new</Link></ListGroup.Item>
                      <ListGroup.Item><Link to="/List">See list of videogames</Link></ListGroup.Item>
                  </ListGroup>
            </div>

                <Footer />
            </div>
        )
    }
}

export default Thanks;