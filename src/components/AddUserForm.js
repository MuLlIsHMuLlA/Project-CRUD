import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: "" 
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            email: "",
            gen: "" 
        })
        
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" placeholder="Gen" name="gen" value={this.state.gen} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> 
        );
    }
}

export default AddUserForm;