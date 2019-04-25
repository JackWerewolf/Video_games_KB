import React, { Component } from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';


class Game extends Component{
    render(){
        return(
          <div className="order">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
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
    <Card.Link href="#">Official website</Card.Link>
    <Card.Link href="#">About</Card.Link>
  </Card.Body>
</Card>
</div>
            
        )
    }
}

export default Game;