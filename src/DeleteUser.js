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
      showDelete: false,
    }
  }


  deleteUser = (e) => {
    e.preventDefault()
    axios.delete(`http://192.168.2.65:3030/posts/${this.props.id}`,
      ({ title: this.state.title,
        body:this.state.body
       }))
      .then(response => {
        console.log(response)
      })
      .then(
        this.setState({
            showDelete:false
        })
      )
      .catch(error => {
        console.log(error)
      })
  }
  handleClose = () => {
    this.setState({
        showDelete: false
    })
  }
  render() {
    const { showDelete } = this.state
    return (<>
      <Button variant="primary" onClick={() => this.setState({ showDelete: true })}>
       Delete
      </Button>
      <Modal show={showDelete} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are You Sure For Delete UserId {this.props.id}???
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={this.deleteUser}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default EditUser;
