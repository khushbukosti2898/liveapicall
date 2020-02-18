import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap'
import editlogo from './editlogo.png'



class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showEdit: false,
      title:props.title,
      body:props.body,
      id:props.id
    }
  }


  editUser = (e) => {
    e.preventDefault()
    axios.put(`http://192.168.2.65:3030/posts/${this.props.id}`,
      ({
        title: this.state.title,
        body: this.state.body
      }))
      .then(response => {
        console.log(response)
      })
      .then(
        this.setState({
          showEdit: false
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
      showEdit: false
    })
  }
  render() {
    const { showEdit,title, body, id } = this.state
    return (<>
      <button onClick={() => this.setState({ showEdit: true })}>
        <img className="imgclass" src={editlogo} alt="edit user" />
      </button>
      <Modal show={showEdit} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" name="_id" readOnly value={id} /><br />
            <Form.Label>SurName</Form.Label>
            <Form.Control type="text" placeholder="Enter Surname" value={title} name="title" onChange={this.handleChange} /><br />
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter Firstname" value={body} name="body" onChange={this.handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editUser}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default EditUser;
