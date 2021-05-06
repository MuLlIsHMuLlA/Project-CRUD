import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Michael Buah",
          email: "michael@email.com",
          gen: "17"
        },
        {
          name: "Robert Owusu",
          email: "robert@email.com",
          gen: "16"
        },
        {
          name: "Claudia Okyere",
          email: "claudia@email.com",
          gen: "18"
        },
        {
          name: "Jaydie Boateng",
          email: "jaydie@email.com",
          gen: "14"
        },
        {
          name: "Darius Hart",
          email: "darius@email.com",
          gen: "13"
        },
      ]
    }
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}} >
          <Row>
            <Col md="4">
              <AddUserForm addUser = {this.addNewUser} />
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
}

export default App;
