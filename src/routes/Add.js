import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';



class Add extends Component {

    constructor(...args) {
        super(...args);
    
        this.state = { validated: false };
      }
    
      handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }

    render() {
        const { validated } = this.state;
        return (

            <div>
            <Header />
            
            <div className="container add-text">
            <h3>Please, fill the form below carefully so the info about the game you're adding is correct.</h3>
            </div>

            <div className="container y">
                <div className="align-items-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Game"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Console</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nintendo, Xbox, PS4, etc."
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Director</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write the name of the director.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="company" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a company.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" placeholder="image URL" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a URL.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Release date</Form.Label>
                <Form.Control type="date" placeholder="release date" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a release date.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Release date</Form.Label>
                <Form.Control type="number" placeholder="rating" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Official website</Form.Label>
                <Form.Control type="url" placeholder="URL" required />
                <Form.Control.Feedback type="invalid">
                  Please provide the website URL.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                label="Are you sure?"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Add game!</Button>
          </Form>
          </div>
          </div>

          <Footer />
          </div>
      );
    }
  }
  
  export default Add;
     