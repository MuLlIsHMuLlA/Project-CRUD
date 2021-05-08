import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';

const User = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        console.log("Item Deleted!")
    }
    return (
        <Col md="4" style={{marginBottom: "1rem"}} >
            <Card>
                <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-muted">
                        CodeTrain User
                    </Card.Subtitle>
                    <Card.Title>
                      {props.userInfo.name}
                    </Card.Title>
                    <Card.Text>
                        <p>
                         Email: {props.userInfo.email}
                        </p>
                        <p>
                          Gen: {props.userInfo.gen}
                        </p>
                    </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">
                        <Button variant="danger" size="sm" onClick={handleDelete} >Delete</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default User;