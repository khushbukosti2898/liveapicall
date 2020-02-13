import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'


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
      ({ title: this.state.title,
        body:this.state.body
       }))
      .then(response => {
        console.log(response)
      })
      .then(
        this.setState({
          showAdd:false
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
      <Button variant="primary" onClick={() => this.setState({ showAdd: true })}>
        Add user
      </Button>
      <Modal show={showAdd} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          SurName<input type="text" name="title" onChange={this.handleChange}></input><br></br>
          FirstName<input type="text" name="body" onChange={this.handleChange}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.addUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default AddUser;
