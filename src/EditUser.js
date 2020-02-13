import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'


class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showEdit: false,
    }
  }


  editUser = (e) => {
    e.preventDefault()
    axios.put(`http://192.168.2.65:3030/posts/${this.props.id}`,
      ({ title: this.state.title,
        body:this.state.body
       }))
      .then(response => {
        console.log(response)
      })
      .then(
        this.setState({
            showEdit:false
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
    const { showEdit } = this.state
    return (<>
      <Button variant="primary" onClick={() => this.setState({ showEdit: true })}>
       Edit
      </Button>
      <Modal show={showEdit} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Id<input type="text" name="_id" readOnly value={this.props.id}></input><br></br>
          SurName<input type="text" name="title" onChange={this.handleChange}></input><br></br>
          FirstName<input type="text" name="body" onChange={this.handleChange}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.editUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default EditUser;
