import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import addlogo from './Male-user-add-icon.png'

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAdd: false
    }

  }
  addUser = (e) => {
    e.preventDefault()
    axios.post('http://192.168.2.65:3030/posts',
      ({
        title: this.state.title,
        body: this.state.body
      }))
      .then(response => {
        console.log(response)
      })
      .then(
        this.setState({
          showAdd: false
        })
      )
      .catch(error => {
        console.log(error)
      })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleClose = () => {
    this.setState({
      showAdd: false
    })
  }
  render() {
    const { showAdd } = this.state
    return (<>
      <button onClick={() => this.setState({ showAdd: true })}>
        <img className="imgclass" src={addlogo} alt="Add user" />        
      </button>
      <Modal show={showAdd} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>SurName</Form.Label>
            <Form.Control type="text" placeholder="Enter Surname" name="title" onChange={this.handleChange} /><br/>
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter Firstname" name="body" onChange={this.handleChange} />  
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.addUser}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default AddUser;
