import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';

import { InputGroup, FormControl, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'






class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <div className="container welcome-text">
      <h3>Welcome to our videogame Knowledge Base!! we're gladd you're here. Please, Feel free to try it out by making a request for a videogame in specific, or you can even add one if it does not exist here yet!</h3>
      </div>

      <div className="container x">
      <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">https://</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <Button variant="outline-secondary">Button</Button>
  </InputGroup>
  </div>


  <div className="container">
    <div className="card align-items-center">
  <Card>
  <Card.Img variant="top" src={this.props.image} alt="image" />
  <Card.Body>
    <Card.Title>{this.props.gameName}</Card.Title>
    <Card.Text>
      {this.props.sinopsis}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Company: {this.props.company}</ListGroupItem>
    <ListGroupItem>Console: {this.props.console}</ListGroupItem>
    <ListGroupItem>Director: {this.props.director}</ListGroupItem>
    <ListGroupItem>Release date: {this.props.releaseYear}</ListGroupItem>
    <ListGroupItem>Rating: {this.props.rate}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link><Link to="#">Official website</Link></Card.Link>
    <Card.Link><Link to="#">About</Link></Card.Link>
  </Card.Body>
</Card>
</div>
</div>


<h4>The game you're looking for is not available? Dont worry, you can add it yourself <Link to="/Add">here!</Link></h4>
<h4>Or you can check the current list of games we have by <Link to="/List">clicking right here!</Link></h4>


<div className="container x">
  <ListGroup>
      <ListGroup.Item><Link to="/Add">Register new</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/List">See list of videogames</Link></ListGroup.Item>
  </ListGroup>
</div>

      <Footer />
      </div>
    );
  }
}

export default App;
